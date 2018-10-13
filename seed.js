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
        zip: "94089",
        state: "Ukraine",
        country: "USSR",
        phone: "+1-800-SPAMM",
        manager: "Ostap Bender",
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
        company: "Schweik and Kats",
        industryId: 8,
        email: "s2.gmail.com",
        password: "welcome",
        isVendor: false,
        address: "Bublichkova 12",
        zip: "94089",
        state: "Chechia",
        country: "Austro-Hungarian Empire",
        phone: "+1-800-DOGY",
        manager: "Joseph Schweik",
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
        company: "Bernie Medoff's Financial Services",
        specializationId: 1,
        email: "v1.gmail.com",
        password: "welcome",
        isVendor: false,
        address: "23 Wall Street, New York",
        zip: "54009",
        state: "New York",
        country: "USA",
        phone: "+1-800-SPAMM",
        manager: "Bernie Medoff",
        intro: `Guaranteed 1000% returns on any venture capital you get from other venture capitalists`

       
    },
    {
        company: "Charles Ponzi and Associates",
        specializationId: 2,
        email: "v2.gmail.com",
        password: "welcome",
        isVendor: false,
        address: "245 2nd Avenue",
        zip: "44543",
        state: "New York",
        country: "USA",
        phone: "+1-800-DOGY",
        manager: "Charles Ponzi",
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
});
  
  

