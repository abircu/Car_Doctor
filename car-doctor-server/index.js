const express=require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const cors=require('cors');
const app=express()
const port=process.env.PORT || 5000;

// middleware 
app.use(cors())
app.use(express.json());

// mongodb connection
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wj189yg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('carDoctor').collection('services');
    const bookingCollection=client.db('carDoctor').collection('bookings');

    app.get('/services',async(req, res) =>{
        const serviceData=serviceCollection.find();
        const result =await serviceData.toArray()
        res.send(result)
    })

    app.get('/services/:id',async(req, res)=>{
      console.log("backend service called ",req.params.id)
      const id=req.params.id;
      const query={ _id: new ObjectId(id)}
      const options={
        projection: {title:1, price:1, service_id: 1, img:1,},
      }
      const result=await serviceCollection.findOne(query, options)
      console.log("backend service result ",result)
      res.send(result)
    })
    // get some bookings data
    app.get('/bookings',async(req, res)=>{
      console.log(req.query.email)
      let query={}
      if(req.query?.email){
        query={email: req.query.email}
      }
      const result=await bookingCollection.find(query).toArray();
      res.send(result)
    })

    // bookings collections
    app.post('/bookings',async(req,res)=>{
      const booking=req.body;
      console.log(booking)
      const result=await bookingCollection.insertOne(booking)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req, res)=>{
    res.send('doctor is running')
})

app.listen(port,()=>{
    console.log(`car doctor server is running port ${port}`)
})