exports.seed = function(knex) {
    return knex('imgProfile').insert([
        { name: 'icon1', imgurl: 'icon1.png' },
        { name: 'icon2', imgurl: 'icon2.png' },
        { name: 'icon3', imgurl: 'icon3.png' },
        { name: 'icon4', imgurl: 'icon4.png' },
    ])
}