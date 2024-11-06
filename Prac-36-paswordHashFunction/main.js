
import bycrypt from 'bcryptjs'


async function hashPassword() {
    const salt = await bycrypt.genSalt(12);
    const hash = await bycrypt.hash('abdul', salt);
    console.log(salt);
    console.log(hash);
}

hashPassword()

async function logIn(pw){
   let correct= await bycrypt.compare(pw,"$2a$12$s8KWgtK1VDOssv687nMW/.aJ7eHWmLE2ELljYWz1oOaKrWCWGeDlC")
   if(correct){
    console.log('Succesfully Login!');
   }else{
    console.log('Unsuccessful to Login!');
   }
}

logIn('abdul1')

