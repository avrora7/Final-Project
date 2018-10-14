var db = require("./models");

let services = [
    { id: 1, name: 'Venture Capitalist', definition: 'VCs are the people who give money' },
    { id: 2, name: 'Mentor', definition: 'Mentors are the people who tech' },
    { id: 3, name: 'Lawyer', definition: 'Lawyers are the people who take your money' },
    { id: 4, name: 'Incubators & Accelerators', definition: 'Incubators help you gain experience' }
];

let specializations = [
    { name: 'Angel', serviceId: 1 },
    { name: 'Seed', serviceId: 1 },
    { name: 'Mid', serviceId: 1 },
    { name: 'Late', serviceId: 1 },

    { name: 'Marketing', serviceId: 2 },
    { name: 'Sales', serviceId: 2 },
    { name: 'Human Resources', serviceId: 2 },

    { name: 'Corporate', serviceId: 3 },
    { name: 'Immigration', serviceId: 3 },
    { name: 'Intellectual Property', serviceId: 3 },

    { name: 'Incubators', serviceId: 4 },
    { name: 'Accelerators', serviceId: 4 }
];

let industries = [
    {id: 1, name: 'Mobility Tech'},
    {id: 2, name: 'Food Tech'},
    {id: 3, name: 'Healthcare'},
    {id: 4, name: 'Fintech'},
    {id: 5, name: 'Building Maintenance'},
    {id: 6, name: 'Artificial Intelligence'},
    {id: 7, name: 'Virtual Reality'},
    {id: 8, name: 'Other'},
];

let startups = [
    {
        company: "Horns & Hoofs",
        industryId: 4,
        email: "s1.gmail.com",
        password: "welcome",
        isVendor: false,
        address: "Deribasovskaya 25",
        city: "Chernomorsk",
        zip: "94089",
        state: "Ukraine",
        country: "USSR",
        phone: "+1-800-SPAMM",
        manager: "Ostap Bender",
        website: "https://en.wikipedia.org/wiki/The_Twelve_Chairs",
        managerPhoto: "https://cs9.pikabu.ru/post_img/2017/10/09/11/1507578878139884879.jpg",
        logo: "http://www.lgz.ru/upload/iblock/43e/43e566218a9927b6e82a5b71d6ee4bb2.jpg",
        intro: `At  half  past  eleven  a  young  man aged about  twenty-eight  entered
        Stargorod from the direction of the village of Chmarovka, to the north-east.
        A waif ran along behind him.
             "Mister!" cried the boy gaily, "gimme ten kopeks!"
             The young man took a warm apple out of his pocket "and handed it to the
        waif, but the  child  still kept running behind. Then the young  man stopped
        and, looking ironically at the boy, said quietly:
             "Perhaps you'd also like the key of the apartment where the money is?"`

       
    },
    {
        company: "Schweik's Doggy DNA Test Lab",
        industryId: 8,
        email: "s2.gmail.com",
        password: "welcome",
        isVendor: false,
        address: "Bublichkova 12",
        city: "Prague",
        zip: "94089",
        state: "Chechia",
        country: "Austro-Hungarian Empire",
        phone: "+1-800-DOGY",
        manager: "Joseph Schweik",
        website: "https://en.wikipedia.org/wiki/The_Good_Soldier_%C5%A0vejk",
        managerPhoto: "https://www.slavorum.org/wp-content/uploads/2014/09/vejk.jpg",
        logo: "https://previews.123rf.com/images/saiful007/saiful0071705/saiful007170500330/78533067-vector-black-and-white-dog-smart-and-darling-doggy-outlined-cute-dog-vector-illustration-.jpg",
        intro: `When Švejk subsequently described life in the lunatic asylum, 
        he did so in exceptionally eulogistic terms: 'I really don't know why those 
        loonies get so angry when they're kept there. You can crawl naked on the 
        floor, howl like a jackal, rage and bite. If anyone did this anywhere on 
        the promenade people would be astonished, but there it's the most common or 
        garden thing to do. There's a freedom there which not even Socialists 
        have ever dreamed of.`
    }
];

let vendors = [
    {
        company: "Bernie Madoff's Financial Services",
        specializationId: 1,
        email: "v1.gmail.com",
        password: "welcome",
        isVendor: true,
        address: "23 Wall Street, New York",
        city: "New York",
        zip: "54009",
        state: "New York",
        country: "USA",
        phone: "+1-800-SPAMM",
        manager: "Bernie Madoff",
        logo: "https://static1.squarespace.com/static/53f7b930e4b04b212860c086/t/558b8993e4b0c093c6606ecb/1435208085695/",
        website: "https://en.wikipedia.org/wiki/Bernard_Madoff",
        managerPhoto: "https://www.telegraph.co.uk/content/dam/women/2016/09/15/bernie_madoff_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2ZFZpxM3kZGDghNcfq6-W-s.jpg?imwidth=1400",
        intro: `Guaranteed 1000% returns on any venture capital you get from other venture capitalists`

       
    },
    {
        company: "Charles Ponzi and Associates",
        specializationId: 2,
        email: "v2.gmail.com",
        password: "welcome",
        isVendor: true,
        address: "245 2nd Avenue",
        city: "New York",
        zip: "44543",
        state: "New York",
        country: "USA",
        phone: "+1-800-DOGY",
        manager: "Charles Ponzi",
        logo: "https://localcoinatm.com/wp-content/uploads/2017/09/Blockchain-logo.png",
        website: "https://en.wikipedia.org/wiki/Ponzi_scheme",
        managerPhoto: "https://www.factinate.com/wp-content/uploads/2018/02/21-11.jpg",
        intro: `Will beat any offereing from Bernie Medoff.`
    }
];

let allUsers = startups.concat(vendors);
  
db.Service.bulkCreate(services).then(() => {
    return db.Specialization.bulkCreate(specializations)
})
.then(() => {
    return db.Industry.bulkCreate(industries)
})
.then(() => {
    return db.User.bulkCreate(allUsers, {individualHooks: true})
})
.then(() => {
    process.exit(1);
});
  
  

