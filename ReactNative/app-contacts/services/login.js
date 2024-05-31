const login = (email, password) => {
    return new Promise((resolve, reject) => {
      //TODO: Implementar la llamada al API
      const shouldLogin = email.toString().toLowerCase() === 'admin@admin.com' && password === 'admin'
      if(true){
        const authData = {
          access_token: '123456789',
          expires_in: 3600,
          profile: {
            email: 'admin@admin.com',
            fullName: "Admin ORT",
            role: 'admin'
          }
        }
        return resolve(authData)
      }else{
        return reject('Usuario o contraseña incorrectos')
      }
    })
}

export default {
  login
}