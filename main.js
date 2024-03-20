function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function toggleLike(x, commentId) {
    x.classList.toggle('fa-solid');
    let likeCount = document.getElementById(`count-${commentId}`);
    if (x.classList.contains('fa-solid')) {
        likeCount.textContent++;
    } else {
        likeCount.textContent--;
    }
}

function dislike(x){
    x.classList.toggle('fa-solid');
}

let a = 1;
function changeValue(event) {
    a = event.target.value;
}

let im = 'AP.webp';
function changeImage(event) {
    im = event.target.value;
}

function read(e) {
    e.classList.toggle("read");
}

document.getElementById('rand').innerText = Math.floor(Math.random() * 99) + 1;

// ________________________________________________________________Themes (dark mode/ light mode)
let theme = document.getElementById('theme');
let popup = document.getElementById('popup');
let close = document.querySelectorAll('.close');
let over = document.getElementById('over');

theme.addEventListener('click', () => {
    popup.style.display = 'block';
    over.style.display = 'block';
});

let light = document.getElementById('light');
let dim = document.getElementById('dim');
let dark = document.getElementById('dark');

light.addEventListener('click', () => {
    document.documentElement.style.setProperty("--border-color", "hsl(190, 100%, 42%)");
    document.documentElement.style.setProperty("--bg-color", "hsl(189, 75%, 75%)");
    document.documentElement.style.setProperty("--body-color", "hsl(190, 30%, 95%)");
    document.documentElement.style.setProperty("--white", "hsl(190, 30%, 100%)");
    document.documentElement.style.setProperty("--box-shadow", "hsl(190, 30%, 85%)");
    document.documentElement.style.setProperty("--text-color", "#333");
    document.documentElement.style.setProperty("--icon-color", "#888");
    document.documentElement.style.setProperty("--black", "#000");
})

dark.addEventListener('click', () => {
    document.documentElement.style.setProperty("--border-color", "hsl(190, 100%, 30%)");
    document.documentElement.style.setProperty("--bg-color", "hsl(189, 100%, 15%)");
    document.documentElement.style.setProperty("--body-color", "hsl(190, 10%, 5%)");
    document.documentElement.style.setProperty("--white", "hsl(190, 10%, 10%)");
    document.documentElement.style.setProperty("--box-shadow", "hsl(190, 10%, 5%)");
    document.documentElement.style.setProperty("--text-color", "#aaa");
    document.documentElement.style.setProperty("--icon-color", "#666");
    document.documentElement.style.setProperty("--black", "#fff");
})

dim.addEventListener('click', () => {
    document.documentElement.style.setProperty("--border-color", "hsl(190, 100%, 50%)");
    document.documentElement.style.setProperty("--bg-color", "hsl(189, 100%, 30%)");
    document.documentElement.style.setProperty("--body-color", "hsl(190, 10%, 20%)");
    document.documentElement.style.setProperty("--white", "hsl(190, 10%, 25%)");
    document.documentElement.style.setProperty("--box-shadow", "hsl(190, 10%, 15%)");
    document.documentElement.style.setProperty("--text-color", "#ccc");
    document.documentElement.style.setProperty("--icon-color", "#888");
    document.documentElement.style.setProperty("--black", "#fff");
})

// _______________________________________________________________Content of Feedcard 

const options = [
    [
        { id: 1, pic: "espn.webp", user: "ESPN sports", time: "13 hrs ago", title: "PV Sindhu, Anmol Kharb bookend glorious triumph that heralds bright future for Indian women's badminton", img: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0218%2Fr1292804_1023x576_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg", likes: "159", comments: "14", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 2, pic: "AP.webp", user: "AP sports", time: "24 mins ago", title: "William Byron wins Daytona 500", img: "https://dims.apnews.com/dims4/default/03f6db0/2147483647/strip/true/crop/5373x3582+498+0/resize/660x440!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa7%2Fa0%2F069c239a88ba5fd27448671c01d1%2F73246e71d4c94883a5923f3cd66c40ef", likes: "213", comments: "30" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 3, pic: "fox.webp", user: "Fox sports", time: "3 hrs ago", title: "The NBA's scoring boom is still going strong, and some wonder if that's a good thing", img: "https://dims.apnews.com/dims4/default/8939817/2147483647/strip/true/crop/3706x2471+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F51%2F80%2F1ccb17eefb9d1688d5e7f2a490f3%2F25faf21ca1c24384b99d144b50d7b5f6", likes: "308", comments: "250" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 4, pic: "espn.webp", user: "ESPN sports", time: "54 mins ago", title: "R Ashwin set to rejoin Team India from Day 4 of the 3rd Test", img: "https://assets.bcci.tv/bcci/articles/1708230854__AI_2906.jpg", likes: "40", comments: "12" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"}
    ],

    [
        { id: 5, pic: "https://styles.redditmedia.com/t5_2sf6m/styles/communityIcon_n0lm6ui0425c1.png", user: "ChaosMandarin", time: "13 hrs ago", title: "Announcing Path of Exile: Heist", img: "https://external-preview.redd.it/FOKqG3PK0m9coBHQFiIKcN8MVf7gU4T0aDTHNzKJQNA.jpg?auto=webp&s=1c2013ace1d3e094e61d2026e26c0634ba5c6a44", likes: "250", comments: "12", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 6, pic: "https://styles.redditmedia.com/t5_324q4/styles/communityIcon_qdncpccj75yb1.png", user: "CuratedTumblr", time: "2 weeks ago", title: "Minecraft is Minecraft", img: "https://preview.redd.it/minecraft-is-minecraft-v0-eix2pfk45uib1.jpg?auto=webp&s=f00382f75fc9c771dba459b4548e8f6c48762d40", likes: "103", comments: "10" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 7, pic: "https://i.redd.it/snoovatar/avatars/36deee33-1b1a-4c67-a454-d8ff8f6e1e44.png", user: "NorCalAthlete", time: "15 hrs ago", title: "Pacific Drive - How To Reach The Mid-Zone", img: "https://www.gamespot.com/a/uploads/original/1816/18167535/4259584-pacific-drive-mid-zone-crossing-guide-3.jpg", likes: "253", comments: "14", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 8, pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png", user: "Flooo176", time: "21 days ago", title: "(Approximately) Genshin Impact Map Now. Vs 2020", img: "https://preview.redd.it/approximately-genshin-impact-map-now-vs-2020-v0-xsrqi1vtp0gc1.png?width=952&format=png&auto=webp&s=38e7cea1875c3576908fe574719bd242282db871", likes: "39", comments: "8" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 9, pic: "https://i.redd.it/snoovatar/avatars/cfc408d8-b71d-49f6-9e09-195f319a117b.png", user: "bja276555", time: "4 months ago", title: "Halo Infinite May Have Just Begun Its Renaissance", img: "https://external-preview.redd.it/halo-infinite-may-have-just-begun-its-renaissance-v0-5Oh9OKsAEiEshUfTKgD8ACS9blpdTHTe_NZtVcDCUAE.jpg?width=1080&crop=smart&auto=webp&s=829a9dbe0251b310b09cfb2fb431d8d0d153bf40", likes: "659", comments: "158" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 10, pic: "https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfZWI5NTlhNzE1ZGZmZmU2ZjgyZjQ2MDU1MzM5ODJjNDg1OWNiMTRmZV8zMTA3NTcxNg_rare_140fbe9b-4d70-4186-b965-57faf29a30d3.png", user: "AdonisMorisette", time: "2 days ago", title: "1/35 scale abandoned UN TIGR from 'Escape From Tarkov' (video game)", img: "https://preview.redd.it/approximately-genshin-impact-map-now-vs-2020-v0-xsrqi1vtp0gc1.png?width=952&format=png&auto=webp&s=38e7cea1875c3576908fe574719bd242282db871", likes: "129", comments: "78" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 11, pic: "https://i.redd.it/snoovatar/avatars/16ce8a2d-1548-44bc-91ad-bb2c955b23c4.png", user: "alex040512", time: "10 days ago", title: "Escape From Tarkov Is About To Get Its First Microtransactions", img: "https://external-preview.redd.it/escape-from-tarkov-is-about-to-get-its-first-v0-25zNdMV8IU1-tkyOn0aQdH6nkLieFSOI5viHuLhW78Y.jpg?width=1080&crop=smart&auto=webp&s=1cb956b843990370c58635eb3fb60431d602c4e1", likes: "315", comments: "72" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 12, pic: "https://i.redd.it/snoovatar/avatars/2329627c-3552-46fa-a57a-d16431233d7a.png", user: "FeebleFrosty", time: "1 month ago", title: "Guys... it's not real, it never was. Escape From Tarkov does not exist. (ok but fr anyone else got this error? I'm seeing people with other issues but this one made me question space and time)", img: "https://preview.redd.it/guys-its-not-real-it-never-was-escape-from-tarkov-does-not-v0-udi5bzkfhu8c1.png?auto=webp&s=bc7e91de6840a58eb6a06694f2e65ed7cb1070b2", likes: "578", comments: "44" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 13, pic: "https://i.redd.it/snoovatar/avatars/3b897617-1b68-4bdf-b0dd-621eb8b2e266.png", user: "YasuhiroK", time: "2 days ago", title: "It's Been Five Long Years Since Hollow Knight: Silksong Was Officially Announced - Nintendolife", img: "https://external-preview.redd.it/its-been-five-long-years-since-hollow-knight-silksong-was-v0-d_uURvr40Y_ni28G-MJuu1NlXNdHFs9NpCzQEOBXXBY.jpg?width=1080&crop=smart&auto=webp&s=cb5dd1f0f303ca6989f1f7e19052fa0566118f28", likes: "147", comments: "19" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
    ],

    [
        { id: 14, pic: "AP.webp", user: "zaid123", time: "12 hrs ago", title: "How a Rookie won over the Golden State Warrier", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/19142324/0220_NBA_BrianPodziemski.jpg", likes: "219", comments: "19", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 15, pic: "AP.webp", user: "tans$6", time: "2 days ago", title: "Women Outnumber Men in South Korea's Sports Stadiums", img: "https://static01.nyt.com/images/2024/01/18/multimedia/00xp-womenfans-htvm/00xp-womenfans-htvm-superJumbo.jpg?quality=75&auto=webp", likes: "139", comments: "24", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 16, pic: "AP.webp", user: "rids16", time: "1 month ago", title: "Lefty Driesell, Hall of Fame College Basketball Coach, Dies at 92", img: "https://static01.nyt.com/images/2024/02/21/multimedia/20Driesel--03-kgtz-print1/20Driesel--03-kgtz-superJumbo.jpg?quality=75&auto=webp", likes: "212", comments: "16", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 17, pic: "AP.webp", user: "imqueen", time: "7 hrs ago", title: "Granny style: Can an 84-year-old make the WNBA? She's got their attention", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/13150456/DSC06805-e1707854717218-1024x683.jpg", likes: "187", comments: "29k", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 18, pic: "AP.webp", user: "pandas", time: "2 months ago", title: "Giannis Antetokounmpo on this season and what's to come: 'We have to go and take it'", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/20165530/240220-Giannis1-scaled-e1708466158628.jpg", likes: "323", comments: "21", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 19, pic: "AP.webp", user: "devil14", time: "5 days ago", title: "Sue Bird: Caitlin Clark can be a WNBA All-Star as a rookie, would encourage Iowa star to go pro", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/06/28160858/GettyImages-1483319798-scaled-e1708528657587-1024x682.jpg", likes: "519", comments: "27", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 20, pic: "AP.webp", user: "jeeny190", time: "10 hrs ago", title: "Robert Lewandowski was Barcelona's big post-Messi gamble. It hasn't entirely paid off", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/20104711/GettyImages-2012028062-1-scaled-e1708444293312.jpg", likes: "270", comments: "51", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 21, pic: "AP.webp", user: "jony00", time: "7 days ago", title: "Man on a mission: NFL great Alan Page's quest for justice in football and beyond", img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/19124146/IMG_2154-scaled-e1708364552931.jpeg", likes: "326", comments: "251", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 22, pic: "AP.webp", user: "romeo12", time: "18 days ago", title: "Kelvin Kiptum, Marathon World Record-Holder, Is Dead at 24", img: "https://static01.nyt.com/images/2024/02/13/multimedia/13xp-kiptum-hlfw/13xp-kiptum-hlfw-jumbo.jpg?quality=75&auto=webp", likes: "296", comments: "18", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 23, pic: "AP.webp", user: "hijames", time: "6 hrs ago", title: "Tiger Woods Introduces His New Brand: Sun Day Red", img: "https://static01.nyt.com/images/2024/02/12/multimedia/12tigerwoods-brand-lbcm/12tigerwoods-brand-lbcm-jumbo.jpg?quality=75&auto=webp", likes: "156", comments: "22", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 24, pic: "AP.webp", user: "lovejb", time: "4 days ago", title: "China Keeps Building Stadiums in Africa. But at What Cost?", img: "https://static01.nyt.com/images/2024/02/10/multimedia/10africa-soccer-01-zhfc/10africa-soccer-01-zhfc-superJumbo.jpg?quality=75&auto=webp", likes: "245", comments: "13", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" }
    ],

    [
        { id: 25, pic: "https://i.redd.it/snoovatar/avatars/e61f5086-6efd-4cf4-9df7-41a07e04ff9f.png", user: "beaded_lion59", time: "6 hrs ago", title: "The Tesla cult is so desperate to have Tesla latch on to the AI hype 😂", img: "https://preview.redd.it/the-tesla-cult-is-so-desperate-to-have-tesla-latch-on-to-v0-uft8j7fc06kc1.png?width=1080&crop=smart&auto=webp&s=2491f4ec5398ae16c2664db444d5919321736d90", likes: "132", comments: "12" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 26, pic: "https://styles.redditmedia.com/t5_an6xhc/styles/profileIcon_2x0zvnesyqhc1.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=55bf18b535dd8399d7dbb3913eb01281391a4196", user: "fdes11", time: "a weeks ago", title: "Pfizer and Biden are masterminds!", img: "https://preview.redd.it/pfizer-and-biden-are-masterminds-v0-hnzxilti6uhc1.jpeg?width=1080&crop=smart&auto=webp&s=d2be32be28a94ed243acd11ebd1385392d9ff344", likes: "236", comments: "47" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 27, pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png", user: "from_dust", time: "7 days ago", title: "SpaceX to Deorbit 100 Starlink Satellites Due to Potential Flaw", img: "https://external-preview.redd.it/spacex-to-deorbit-100-starlink-satellites-due-to-potential-v0-YGM3GW-hmrKQsdRPrwnLXLQ60rJyep8Dvq8eZDZoD0o.jpg?width=1080&crop=smart&auto=webp&s=6ac9210a6befc831ce55fc4b4db528ddb46e7a8c", likes: "13", comments: "11", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 28, pic: "https://styles.redditmedia.com/t5_ekpxx/styles/profileIcon_i6apdkuenzc81.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=3ceb76b33e0d4c0733c6844703c25e0baf4a4809", user: "GonzoVeritas", time: "4 months ago", title: "Pfizer to price Covid drug Paxlovid at $1,390 per course", img: "https://external-preview.redd.it/pfizer-to-price-covid-drug-paxlovid-at-1-390-per-course-v0-3IkC0qVbS2QdlTicUhRTCEv1b-XNRZyjKSU5XeShJE8.jpg?width=1080&crop=smart&auto=webp&s=c65ea0b4c10cd247bb06ddacb988afda0c66543f", likes: "3.7k", comments: "593" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 29, pic: "https://i.redd.it/snoovatar/avatars/c23a03d5-b1ef-420b-8843-3f14484b4373.png", user: "tritonal", time: "5 months ago", title: "FDA Approves Updated Novavax Vaccine", img: "https://external-preview.redd.it/fda-approves-updated-novavax-vaccine-v0-3xHzaOV2YUm7-1TR2wrCfof2MqHO_TXrogHz1Pyzw8o.jpg?width=1080&crop=smart&auto=webp&s=f1828c62ebba89337f701e5710f9b748c69f73b9", likes: "124", comments: "68" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 30, pic: "https://i.redd.it/snoovatar/avatars/3b897617-1b68-4bdf-b0dd-621eb8b2e266.png", user: "saltbutt", time: "1 year ago", title: "Not today, Walgreens.", img: "https://preview.redd.it/not-today-walgreens-v0-msqygvnbghla1.jpg?width=1080&crop=smart&auto=webp&s=7747390a3eb4b17f369655ced3415d19b9b69d55", likes: "113", comments: "34" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 31, pic: "https://styles.redditmedia.com/t5_49bs0u/styles/profileIcon_0qomi2nlnhy71.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=e585a40ee69f8c70f01c1281a6bfcc451d8b68fa", user: "onceuponanutt", time: "11 months ago", title: "GameStop NFT on FTX", img: "https://preview.redd.it/gamestop-nft-on-ftx-v0-myi7nu8l1ez91.jpg?width=1080&crop=smart&auto=webp&s=6693b9494382931bfc1b100f614ca86d880f9143", likes: "124", comments: "57" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 32, pic: "https://i.redd.it/snoovatar/avatars/7fed812b-4a88-4304-8f7b-0a4ff518ddc6.png", user: "JeffCook78", time: "15 days ago", title: "Pentagon and SpaceX respond to reports of Russia using Starlink", img: "https://external-preview.redd.it/pentagon-and-spacex-respond-to-reports-of-russia-using-v0-1hPyBMtZdYreYwjzxJt1wTtlutDUUZpfDvFcf-IuGsM.jpg?width=1080&crop=smart&auto=webp&s=c2d5d105128160ea37d95e71152fd713c7b5692a", likes: "115", comments: "11" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 33, pic: "https://i.redd.it/snoovatar/avatars/990ea7a7-9515-474a-a58c-8565fef70270.png", user: "TiberiusWoodwind", time: "1 month ago", title: "FYI: GameStop NFT Marketplace winding down on February 2nd, 2024", img: "https://preview.redd.it/fyi-gamestop-nft-marketplace-winding-down-on-february-2nd-v0-6img002n51cc1.jpeg?width=1080&crop=smart&auto=webp&s=0756081435dfca98c259c67b35537c92b4c20b80", likes: "364", comments: "14" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"}
    ],

    [
        { id: 34, pic: "UniFyd.png", user: "zain123", time: "2 days ago", title: "Kristen Stewart calls for more wide-ranging discussions about LGBTQ films", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240220-Kristen-Stewart-main-se-1046a-95f3a1.jpg", likes: "125", comments: "32", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 35, pic: "UniFyd.png", user: "tans12", time: "1 month ago", title: "Gwyneth Paltrow ski trial musical set for U.S. debut with new vocals", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240219-Darren-Criss-se-317p-8a4f76.jpg", likes: "281", comments: "41" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 36, pic: "UniFyd.png", user: "imqueen", time: "3 days ago", title: "BAFTA will honor Matthew Perry at Television Awards after omission from In Memoriam sparks backlash", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240219-matthew-perry-se-1210p-c9389a.jpg", likes: "23", comments: "6" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 37, pic: "UniFyd.png", user: "jblover12", time: "2 months ago", title: "Snoop Dogg's brother, music executive Bing Worthington Jr., dead at 44", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240216-snoop-dogg-se-523p-012da4.jpg", likes: "112", comments: "45" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 38, pic: "UniFyd.png", user: "selena", time: "5 days ago", title: "Kelly Osbourne says Ozempic weight loss trend is 'amazing' in direct opposition to her mom's opinion", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240216-kelly-osbourne-se-339p-fed881.jpg", likes: "51", comments: "9" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 39, pic: "UniFyd.png", user: "heyqueen", time: "18 days ago", title: "Taylor Swift donates $100,000 to family of woman fatally shot at the Chiefs victory parade", img: "https://imgs.search.brave.com/gtV_c5klYB6XwNUsuD41c2K7X2fxrG_OPgr4VXqCZko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9maXQtNzYwdyxm/X2F1dG8scV9hdXRv/OmJlc3Qvcm9ja2Nt/cy8yMDI0LTAyLzI0/MDIxMS10YXlsb3It/c3dpZnQtdmwtMjA3/cC03M2UxNzguanBn", likes: "221", comments: "32" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?"},
        { id: 40, pic: "UniFyd.png", user: "tanu78", time: "15 days ago", title: "The New Look' chronicles the rise of fashion designer Christian Dior", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240214-The-New-Look-ew-403p-6ebdfd.jpg", likes: "335", comments: "66", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 41, pic: "UniFyd.png", user: "james11", time: "1 week ago", title: "Dolly Parton says Elle King 'just had a little too much to drink' at slurred, profane Grand Ole Opry tribute", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240213-dolly-King-beg-1112a-fb00c9.png", likes: "613", comments: "43", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 42, pic: "UniFyd.png", user: "kokimodi12", time: "2 days ago", title: "Every moment Taylor Swift was on TV rooting on boyfriend Travis Kelce at Super Bowl 2024", img: "https://imgs.search.brave.com/S6Wang49uQxl5KjCW8ib8rgVjjKlRxM8a1-Z-c8M0vc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wYWdl/c2l4LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMy8y/MDI0LzAyLzI1LTIy/LW92ZXJ0aW1lLXdp/bi1zdXBlci03NjM3/MzEzNy5qcGc", likes: "536", comments: "54", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 43, pic: "UniFyd.png", user: "bikkikimataji", time: "2 months ago", title: "Hannah Gadsby's Netflix special 'Gender Agenda' sets lineup of genderqueer comedians", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240212-hannah-gadsby-ch-1604-723d3a.jpg", likes: "324", comments: "43", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 44, pic: "UniFyd.png", user: "capy12", time: "5 days ago", title: "Jacob Elordi under investigation of accusation he assaulted radio producer in Australia", img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240205-jacob-elordi-mn-1030-f26652.jpg", likes: "223", comments: "73", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" }
    ],

    [
        { id: 45, pic: "UniFyd.png", user: "tans12", time: "2 days ago", title: "Emergency To Bhopal Tragedy: A Look At Milestones In Fali Nariman's Career", link: "https://www.ndtv.com/india-news/remembering-fali-s-nariman-renowned-senior-advocate-and-legal-icon-who-died-at-95-5098106", img: "https://c.ndtvimg.com/2024-02/tn97g2og_fali-nariman_625x300_21_February_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738", likes: "129", comments: "32", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 46, pic: "UniFyd.png", user: "lon123", time: "6 days ago", title: "Trudeau Calls Putin 'Monster' After Kremlin Critic Alexei Navalny's Death", link: "https://www.ndtv.com/world-news/justin-trudeau-calls-vladimir-putin-monster-after-jailed-kremlin-critic-alexei-navalnys-death-5073879", img: "https://c.ndtvimg.com/2024-02/8od22cd8_justin-trudeau-vladimir-putin-_625x300_17_February_24.jpg", likes: "143", comments: "42", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 47, pic: "UniFyd.png", user: "ginny11", time: "1 week ago", title: "Indian-Origin Motel Owner, 76, Shot Dead In US After Argument Over Room", link: "https://www.ndtv.com/indians-abroad/indian-origin-motel-owner-76-shot-dead-in-us-after-argument-over-room-5064298", img: "https://c.ndtvimg.com/2022-11/3eb3kf1_us-police-generic_625x300_14_November_22.jpg", likes: "232", comments: "41", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 48, pic: "UniFyd.png", user: "selena56", time: "2 weeks ago", title: "Delhi Woman Killed In Temple Stage Crash Was Sole Caregiver For Son", link: "https://www.ndtv.com/india-news/kalkaji-tragedy-delhi-woman-killed-in-temple-stage-crash-was-sole-caregiver-for-son-4953744", img: "https://c.ndtvimg.com/2024-01/r4n81kkg_kalkaji-stage-collapse_625x300_28_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738", likes: "173", comments: "31", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 49, pic: "UniFyd.png", user: "imqueen", time: "17 hrs ago", title: "Kotia Projects Contractor Arrested In Gujarat Boat Tragedy That Killed 14", link: "https://www.ndtv.com/india-news/vadodara-boat-capsize-kotia-projects-contractor-arrested-in-gujarat-boat-tragedy-that-killed-14-4920801", img: "https://c.ndtvimg.com/2024-01/glvtptb8_gujarat-boat-tragedy_120x90_24_January_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738", likes: "26", comments: "7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 50, pic: "UniFyd.png", user: "slayuqueen", time: "6 hrs ago", title: "High Court Seeks Boat Tragedy Report From Gujarat Government By Jan 29", link: "https://www.ndtv.com/india-news/gujarat-high-court-seeks-boat-tragedy-report-from-gujarat-government-by-january-29-4905017", img: "https://c.ndtvimg.com/2024-01/80dhkbj8_boat-tragedy-gujarat_625x300_18_January_24.jpeg?im=FeatureCrop,algorithm=dnn,width=650,height=400", likes: "32", comments: "12", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 51, pic: "UniFyd.png", user: "capy12", time: "5 hrs ago", title: "British Family Awarded $100 Million In Grand Canyon Helicopter Crash Tragedy", link: "https://www.ndtv.com/world-news/british-family-awarded-100-million-in-grand-canyon-helicopter-crash-tragedy-4842118", img: "https://c.ndtvimg.com/2024-01/3fr9lesg_airbus-ec130-b4-helicopter_625x300_11_January_24.jpeg", likes: "273", comments: "14", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 52, pic: "UniFyd.png", user: "mrshy78", time: "3 hrs ago", title: "Alexei Navalny's Death A 'Terrible Tragedy' If Confirmed, Says White House", link: "https://www.ndtv.com/world-news/alexei-navalnys-death-a-terrible-tragedy-if-confirmed-says-white-house-5070280", img: "https://c.ndtvimg.com/2024-02/eiqfag7g_alexei-navalny_625x300_16_February_24.jpeg", likes: "712", comments: "25", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 53, pic: "UniFyd.png", user: "jblover", time: "8 days ago", title: "What Was Lost in the Fire that Destroyed Brazil’s Largest Museum", link: "https://www.the-scientist.com/what-was-lost-in-the-fire-that-destroyed-brazils-largest-museum-64751", img: "https://cdn.the-scientist.com/assets/articleNo/64751/hImg/28459/museum-fire-banner-x.webp", likes: "312", comments: "92", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" },
        { id: 54, pic: "UniFyd.png", user: "jlena14", time: "2 days ago", title: "Research Boat Sinks, Two Die", link: "https://www.the-scientist.com/research-boat-sinks-two-die-36588", img: "https://cdn.the-scientist.com/assets/articleNo/36588/iImg/15038/c9378c7c-1907-4e28-a85b-4abdf1f4f868-boat-full.jpg", likes: "24", comments: "4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus sapiente totam pariatur fugiat eos quia explicabo, provident, quae suscipit ut expedita dicta omnis molestias tenetur voluptate accusantium sequi ad?" }
    ]
]

function Feed(x) {
    var myFeed = ""
    let center_div = document.querySelector(".center");

    options[x].forEach((element) => {
        myFeed += `<div class="feedcard">
        <div class="firstline">
            <div class="bla">
                <img src=${element.pic} alt=""> 
                <h6>uF/${element.user}</h6>
            </div>
            <p>. ${element.time} . Popular on UniFyd</p>
        </div>
        <h3>${element.title}</h3>
        <div class="imgdiv" style="background: url('${element.img}') center;"><img src=${element.img} alt="none" loading="lazy"></div>
        <div class="extra" onclick="read(this)">
            ${element.description}
        </div>
        <div class="lastline">
            <button type="button">
                <i class="fa-regular fa-thumbs-up" onclick="toggleLike(this, ${element.id})" id="like" style="color: rgb(0, 191, 0);"></i>
                <p id="count-${element.id}">${element.likes}</p>
                <i class="fa-regular fa-thumbs-down" onclick="dislike(this)" id="dislike" style="color: red;"></i>
            </button>
            <a href="comments${element.id}.html" target= "_blank">
                <i class="fa-regular fa-comment"></i>
                <p style="margin-right: 1rem;">${element.comments}</p>
            </a>
            <div class="like">
                <i class="fa-regular fa-heart" onclick="dislike(this)"></i>
            </div>
        </div>
    </div>`
    })
    center_div.innerHTML = myFeed;
}

window.addEventListener("load", () => {
    Feed(0);
})
let Popular = document.querySelector('#Popular').addEventListener('click', () => {
    Feed(0)
    scrollToTop()
});
let Gaming = document.querySelector('#Gaming').addEventListener('click', () => {
    Feed(1)
    scrollToTop()
});
let Sports = document.querySelector('#Sports').addEventListener('click', () => {
    Feed(2)
    scrollToTop()
});
let Business = document.querySelector('#Business').addEventListener('click', () => {
    Feed(3)
    scrollToTop()
});
let Celebrity = document.querySelector('#Celebrity').addEventListener('click', () => {
    Feed(4)
    scrollToTop()
});
let Accident = document.querySelector('#Accident').addEventListener('click', () => {
    Feed(5)
    scrollToTop()
});



// _______________________________________________________________Content of top reelcard
var arr = [
    { img: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/kilat/b26254c66cbf5237bb01573dee687c0f.jpg", heading: "Gaming News", para: "Ohh bhai ye konsa game hai ?" },
    { img: "https://img.naidunia.com/naidunia/ndnimg/11022024/11_02_2024-car_axcident_-_3.jpg", heading: "Accident News", para: "Ohh bhai accident ho gya" },
    { img: "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/6184e52a-123b-43f5-88b2-d001e456a4a0/1ed7dd46-f940-4512-9cc7-850a76778cf6/1280x720/match/image.jpg", heading: "Cricket News", para: "Ohh bhai yha kya ho rha h" },
    { img: "https://media.npr.org/assets/img/2023/07/20/press-photo-2-286effaf6f8b23a6b2a6ec3aebc13955a26b630e-s1100-c50.jpg", heading: "Newly Released", para: "Ohh bhai naya gaana aa gya" },
    { img: "https://img.etimg.com/thumb/width-640,height-480,imgsize-62412,resizemode-75,msid-104737239/news/international/us/movies-series-to-stream-this-weekend-check-full-list.jpg", heading: "Upcoming Movies", para: "Ohh bhai nayi movie !!" },
    { img: "https://imgs.search.brave.com/7XRmivs00jla1wGiE9tUzM3Bn50KTYO64BAm0O19BeE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/VUJfSmxSLWlhSG9a/d1NpblZseFhjWXMx/cUJzPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNzk5/eDA6ODAxeDIpL3Ro/ZS1zaW1wc29uLTEx/MDYyMy0yZTAwNjQ1/N2FhYjY0ZmFmYWIx/MTEwOTdiZmVkZjJm/Ny5qcGc", heading: "Simpsons did it again ?", para: "The simpsons predicted the future once again" },
    { img: "https://imgs.search.brave.com/9B4GZw5waV1Mzbl2zHsn_DQJFN37lQNv-YnObI5Z9T4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyMy8x/Mi8wMS81NTB4MzA5/L1BNX01vZGlfd2l0/aF9HaW9yZ2lhX01l/bG9uaV8xNzAxNDU3/MjE2MzgxXzE3MDE0/NTcyMTY2NjYuanBl/Zw", heading: "Modi-Meloni Dating ?", para: "Ohh bhai pyaar vyaar chl rha hai !!" }
]

var clutter = "";

arr.forEach(function (element) {
    clutter += `<a href="#" class="reelcard">
    <img src=${element.img} alt="image" loading="lazy">
    <h1>${element.heading}</h1>
    <marquee behavior="normal" direction="left"><p>${element.para}</p></marquee>
    </a>`;
});

document.querySelector(".top").innerHTML = clutter;

// ______________________________________________________________Content of right side

var right = [
    {img: "https://imgs.search.brave.com/_3ON5LfQDbhpwWFX6RVUPIxh9zK_at4xcvstdtTGIvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MDc5MTc2Ny9waG90/by9sYXVnaGluZy1o/b3JzZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9XzYzaUhy/RUNvbmtaZFNIT1J5/SWpPbDdONFI0aHh3/S0NacndYbXQ4d3B0/dz0", name: "funnyMemer", members: "4,31,535"},
    {img: "https://imgs.search.brave.com/72Ui0xWgk-ZrgEsMka8H4Q-X4QaIftvIzDE5rytZ0D0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/ZzF1MmxrbGl5NGw3/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NDAzNjZkMmFk/MWZhOGE0NmU4YzEx/NjYwZTkxZjk1OGI4/NjFiN2RiZg", name: "dankyyy", members: "2,43,456"},
    {img: "https://imgs.search.brave.com/zjp5o6HxGkyF-5zfh-OXsfV_m9M9dwGXQPddn1vTkUE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI0LzQxLzAz/LzM2MF9GXzEyNDQx/MDM2N19NNTM4ZVF1/aHA0SXR1WEUyUlZ0/NW03NWtPRFcyblRa/ei5qcGc", name: "cleanMemes", members: "87,653"},
    {img: "https://imgs.search.brave.com/21rIDQnS2TU_uINMK7t7OKEpA3dAhixwy_azVeKaMs4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1Lzgz/LzEwLzI1ODMxMDFh/NGU2YzNhMmYxZDg1/MzM5MTZhYjIyMDE4/LmpwZw", name: "flowersHeal", members: "2,362"},
    {img: "https://imgs.search.brave.com/xeFdywHVbPowvmkjNo1FMpa1_5CFOOsyGjEnvXqertE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NzYxMzY5MS9waG90/by9hYnN0cmFjdC1n/bGl0Y2gtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TlMxQ1Rz/cm40NHpmd09ESTFI/YkY5QWVLaV9LcEJ1/bjVlZGo3NFBrTW9U/OD0", name: "glitchInMatrix", members: "9,569"},
    {img: "https://imgs.search.brave.com/DDK5RMr09SNpUrRwAKFDg4oZFRe_7bND0S8nVM5DUrc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lbW9q/aWlzbGFuZC5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvUG9vcF9F/bW9qaV83YjIwNGYw/NS1lZWM2LTQ0OTYt/OTFiMS0zNTFhY2Mw/M2QyYzdfbGFyZ2Uu/cG5nP3Y9MTU3MTYw/NjAzNg", name: "Ohhshi...", members: "83,745"}
]

var rClutter = ""; 

right.forEach((element)=>{
    rClutter += `<a href="a.html" target="_blank">
        <div class="channel">
        <img src="${element.img}"
            alt="">
        <div class="faltu">
            <h5>uF/${element.name}</h5>
            <p>${element.members} members</p>
        </div>
        </div>
    </a>`
});

document.querySelector('.rightClutter').innerHTML = rClutter;

function filterChannels() {
    const input = document.getElementById('rSearch').value.toLowerCase();
    const channels = document.getElementsByClassName('channel');
  
    Array.from(channels).forEach((channel) => {
      const name = channel.getElementsByTagName('h5')[0].innerText.toLowerCase();
      if (name.includes(input)) {
        channel.style.display = 'flex';
      } else {
        channel.style.display = 'none';
      }
    });
  }

  document.getElementById('rSearch').addEventListener('input', filterChannels);

//_______________________________________________________Form Validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const user_id = document.getElementById('user_id');

let login = document.getElementById('login');

login.addEventListener('click', () => {
    form.style.display = 'block';
    over.style.display = 'block';
});

let lock = document.querySelector('.fa-lock')
lock.addEventListener('click', () => {
    if (password.type === "password") {
        password.type = 'text'
        lock.classList.remove('fa-lock')
        lock.classList.add('fa-lock-open')
    } else {
        password.type = 'password'
        lock.classList.remove('fa-lock-open')
        lock.classList.add('fa-lock')
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let f1 = f2 = f3 = f4 = f5 = false;
const validateInputs = () => {
    let usernameValue = username.value.trim();
    let user_id_value = user_id.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        f1 = true;
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        f2 = true;
    }

    if (user_id_value === '') {
        setError(user_id, 'Username cannot be empty')
    } else if (user_id_value.length < 5 || user_id_value.length > 10) {
        setError(user_id, 'Username must be 5 to 10 characters');
    } else {
        setSuccess(user_id);
        f3 = true;
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
        f4 = true;
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        f5 = true;
    }
};

let loggedIn = false;
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    if (f1 && f2 && f3 && f4 && f5) {
        document.getElementById('name_display').textContent = username.value;
        document.getElementById('id_display').textContent = user_id.value;
        document.getElementById('username_div').style.display = 'flex';
        login.style.display = 'none';
        over.style.display = 'none';
        form.style.display = 'none';
        loggedIn = true;
        alert("Form submitted ✓");
    }
});

// ________________________________________________________________________________ create post

let post = document.getElementById('post');
let create_post_div = document.querySelector('.create_post');

post.addEventListener('click', () => {
    if(loggedIn){
        create_post_div.style.display = 'block';
        over.style.display = 'block';
    }
    else{
        alert("You must be logged in to make a post.");
    }
})

let posting = document.getElementById('posting');
posting.addEventListener('submit', e => {
    e.preventDefault();
    create_post_div.style.display = 'none';
    over.style.display = 'none';
})

function submitPost() {
    let description = document.getElementById('description');
    let title = document.getElementById('title');

    const upload = {
        id: 99,
        pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        user: username.value,
        time: "1 mins ago",
        title: title.value,
        img: im,
        likes: 0,
        comments: 0,
        description: description.value
    }
    if(title.value !== ''){
        options[a].push(upload)
        Feed(a);
        scrollToBottom();
    }
}

// ________________________________________________Searchbar

let searchBar = document.getElementById("searchbar");
let dropdown = document.getElementById("dropdown");
let cd = document.getElementById("closeDropdown");

searchBar.addEventListener('click', () => {
    dropdown.style.display = 'block';
    cd.style.display = 'block';
})

function search() {
    let input = searchBar.value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('list');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

close.forEach(function (btn) {
    btn.addEventListener('click', function () {
        form.style.display = 'none';
        create_post_div.style.display = 'none';
        popup.style.display = 'none';
        over.style.display = 'none';
        dropdown.style.display = 'none';
        cd.style.display = 'none';
    });
}); 

function changeA(val) {
    Feed(val);
    scrollToTop();
    dropdown.style.display = 'none';
    cd.style.display = 'none';
}

// ________________________________________________________________Dropdown on left side
let browse = document.getElementById('browse');
let topics = document.getElementById('topics');

browse.addEventListener('click', () => {
    topics.classList.toggle('none');
});