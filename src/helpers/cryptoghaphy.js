const bcrypt = require('bcrypt')

module.exports = {
    async encrypt(password) {

    const salt = await bcrypt.genSalt(Number(10))

    return bcrypt.hash(String(password), salt)
    },

    async decrypt(password, hash){
        return bcrypt.compare(String(password), String(hash))
    }
}