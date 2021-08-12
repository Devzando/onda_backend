exports.seed = function(knex) {
    return knex('imgDist').insert([
        { name: 'dist1', imgurl: 'dist1.png' },
        { name: 'dist2', imgurl: 'dist2.png' },
        { name: 'dist3', imgurl: 'dist3.png' },
        { name: 'dist4', imgurl: 'dist4.png' },
    ])
}