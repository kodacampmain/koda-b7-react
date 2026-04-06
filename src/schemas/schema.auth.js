import Joi from "joi";

const schema = Joi.object({
    username: Joi.string().alphanum().min(5).max(30).required().messages({
        'string.empty': "username tidak boleh kosong",
        'string.min': "username minimal 5 karakter",
        'string.max': "username tidak boleh melebihi 30 karakter",
        'string.alphanum': "username harus berisikan angka dan huruf saja"
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).messages({
        'string.pattern.base': "password hanya berisikan huruf dan angka sebanyak 8-30 karakter",
        'string.empty': "password tidak boleh kosong"
    }),
    repeat_password: Joi.valid(Joi.ref("password")).messages({
        "any.only": "repeat password harus sama dengan password",
    }),
});

export default schema;