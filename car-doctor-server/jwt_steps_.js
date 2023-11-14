/***
 *install json web token
 *jwt.sign (payload,secret,{expiresIn})
 * token client
 *** 
 *how to store token in the client side 
 1.memory -->ok type 
 2.local storage --> ok type
 3.cookies:httponly -->ok type(xss)  */ 

/*
1.set cookies with http only. for development secure:false,
2.cors 
app.use(cors({
    origin: ['http://localhost:5174'],
credintials:true
}));

3.client side axios setting
* in axios set withCredentials:true
*/  