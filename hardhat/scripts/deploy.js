// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  const [owner, user1, user2, user3] = await ethers.getSigners();

  const NewsContract = await ethers.getContractFactory("News");

  const newsContract = await NewsContract.connect(owner).deploy();

  await newsContract.deployed();

  console.log("News Dapp contract address : ", newsContract.address);

  // add articles
  console.log("adding 10 articles");
  let tx = await newsContract
    .connect(user1)
    .postArticle(
      '"Will Speak In Parliament If They Let Me": Rahul Gandhi To NDTV',
      'New Delhi: Rahul Gandhi today denied giving any anti-India speech on his way to attending parliament, where the ruling BJP has repeatedly demanded his apology for his remarks in London raising concerns about the state of democracy in India."I didn\'t give any Anti India speech," Rahul Gandhi told NDTV. Asked whether he would respond to the BJP\'s allegation that he insulted the nation on foreign soil, the Congress MP said: "I will speak inside the House if they allow me to. "However, both houses of the parliament were adjourned for the day shortly after re-convening at 2 pm. Several Union Ministers have demanded that Mr Gandhi apologise to the nation for his speeches in the UK, seen to be critical of the government. "The person who speaks the most in this country, and targets the government day and night, says abroad that he does not have the freedom to speak in India,"Union Law Minister Kiren Rijiju told reporters',
      { value: tokens(0.01) }
    );
  tx.wait();

  tx = await newsContract
    .connect(user2)
    .postArticle(
      "Result of North Andhra graduates constituency MLC poll likely to be delayed",
      "The declaration of the result of the North Andhra Graduates MLC constituency elections, for which counting was taken up at Swarna Bharati Indoor Stadium, Visakhapatnam, on Thursday, is likely to be delayed. According to officials, the counting process will take over 12 hours. Besides, the AP High Court, following a petition by a contestant, in its order, stated that the result announcement would be subject to its final verdict. Owing to the two factors, the North Andhra MLC elections result may be announced late at night or on Friday upon counting votes in Visakhapatnam. The counting is being taken up in two phases with the participation of two teams. As many as 37 candidates are in the fray and the main contest is only among four candidates- PVN Madhav of BJP, S Sudhakar of YSRCP, V Chiranjeevi Rao of TDP and Ramaprabha of PDF. The YSRCP has fielded the candidate in the constituency for the first time after the party’s inception while MLC Madhav is presently representing the constituency. Taking the election as a prestigious one, the main parties campaigned vigorously for their candidates’ victory. The opposition parties accused the ruling party of indulging in irregularities like the distribution of money and registration of bogus votes. Over two lakh graduates cast their vote during the MLC elections in the constituency spreading over six districts (Srikakulam, Manyam, Vizianagaram, Alluri Sitharama Raju, Visakhapatnam, and Anakapalli).",
      { value: tokens(0.01) }
    );
  tx.wait();

  tx = await newsContract
    .connect(user1)
    .postArticle(
      "LinkedIn Adds AI-Generated Profile Summaries and Job Listings",
      "As a Microsoft-owned company, it’s no surprise to see LinkedIn looking to add more AI elements into its platform, with Microsoft now seeking to integrate OpenAI’s conversational GPT back-end into virtually all of its apps and functions. On LinkedIn, that’ll provide new options for creating your LinkedIn profile, while it’s also adding AI-generated job descriptions, as well as new educational opportunities into AI tech, via LinkedIn Learning. First off, LinkedIn’s adding a new GPT-powered tool that will provide personalized writing suggestions for creating your LinkedIn profile. As you can see in this example, a new feature within LinkedIn Premium will be the option to generate a headline or ‘About’ summary for your LinkedIn presence.Tap on the ‘Start’ button, select what you want it to create, and the system will come up with your LinkedIn profile summary, based on your info, and samples from millions of user entries. Or LinkedIn summaries could all start to look much the same. The risk with replicating content based on existing examples is that everything starts to feel very similar, and as more content is generated by AI over time, then fed into these tools to generate even more content, everything could, eventually, seem like a copy of a copy of a copy. Faded, a shadow of the original. Lacking life or personality. We’re not at that level as yet, and excitement around the latest version of the GPT model is high right now, but there is a risk that automated material will be restricted by what’s come before, which will make originality more attention-grabbing. In that context, maybe you’re better writing off your own LinkedIn summary – but at the same time, many people have a lot of trouble coming up with good LinkedIn profile content, and this could be a valuable addition in this respect. LinkedIn’s also testing a new AI-powered job description tool, which will make it faster and easier to write job descriptions. ",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user1)
    .postArticle(
      "New Zealand: Magnitude 7.1 quake strikes Kermadec Islands, tsunami possible",
      "New Zealand earthquake: The quake was at a depth of 10 km. Hazardous tsunami waves are possible for coasts located within 300 kilometers of the epicenter. A magnitude 7.1 earthquake struck in Kermadec Islands region, located north of New Zealand, on Thursday morning, according to a USGS statement. Read more: US' 'increased' spying on Russia led to drone incident: Moscow to Pentagon. The quake was at a depth of 10 km. Hazardous tsunami waves are possible for coasts located within 300 kilometers of the epicenter, the agency says in a separate statement. There is no tsunami threat to Australia, the country’s Bureau of Meteorology said in a tweet.",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user2)
    .postArticle(
      "‘Apocalyptic Conflict’: Attack On Russian Aircraft In Neutral Airspace Will Be Seen As Declaration Of War — Top Diplomat",
      "A deliberate attack on a Russian aircraft in neutral airspace would be an open declaration of war against a nuclear power. This was announced by Russian Ambassador to Washington Anatoly Antonov.“Some lawmakers’ calls go far beyond common sense,” he said, commenting on US Senator Lindsey Graham’s (from South Carolina) threats to shoot down Russian planes approaching US aircraft in international airspace. Earlier, the Russian Defense Ministry published a statement stating that there was no impact between the two aircraft (MQ-9 and Su-27) and that the Reaper drone maneuvered abruptly, losing control and crashing. The ministry added that the US drone was flying without transponders and entered airspace that the Russian government had designated as restricted following the start of their special military operations. “The Russian aircraft did not use onboard weapons, did not come into contact with the unmanned aerial vehicle, and returned safely to their home airfield,” the ministry explained. According to Ambassador Antonov, not the Russian pilots but US politicians are inciting the start of an apocalyptic conflict. We do not seek a conflict with nuclear power. We continue to maintain contacts, including through the Ministry of Defense, to prevent unintentional collisions. I would like American politicians to have the same attitude towards relations with Russia,” the ambassador emphasized. Ukraine became the world’s third largest arms importer after Qatar and India in 2022, because of Russia’s full-scale invasion last year, according to a recent report by the Stockholm International Peace Research Institute (SIPRI). The SIPRI report compares weapons sales globally between 2013–17 and 2018–22. It shows that Ukraine imported a few major arms from 1991 until the end of 2021. However, “as a result of military aid from the USA and many European states following the Russian invasion of Ukraine in February 2022, Ukraine became the 3rd biggest importer of major arms during 2022 (after Qatar and India) and the 14th biggest for 2018–22,” the report by SIPRI stated. The report noted that the deliveries to Ukraine were mainly second-hand items from existing stocks, including 228 artillery pieces, an estimated 5000 guided artillery rockets from the US, 280 tanks from Poland, and over 7000 anti-tank missiles from the UK.",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user2)
    .postArticle(
      "LinkedIn Adds AI-Generated Profile Summaries and Job Listings",
      "As a Microsoft-owned company, it’s no surprise to see LinkedIn looking to add more AI elements into its platform, with Microsoft now seeking to integrate OpenAI’s conversational GPT back-end into virtually all of its apps and functions. On LinkedIn, that’ll provide new options for creating your LinkedIn profile, while it’s also adding AI-generated job descriptions, as well as new educational opportunities into AI tech, via LinkedIn Learning. First off, LinkedIn’s adding a new GPT-powered tool that will provide personalized writing suggestions for creating your LinkedIn profile. As you can see in this example, a new feature within LinkedIn Premium will be the option to generate a headline or ‘About’ summary for your LinkedIn presence.Tap on the ‘Start’ button, select what you want it to create, and the system will come up with your LinkedIn profile summary, based on your info, and samples from millions of user entries. Or LinkedIn summaries could all start to look much the same. The risk with replicating content based on existing examples is that everything starts to feel very similar, and as more content is generated by AI over time, then fed into these tools to generate even more content, everything could, eventually, seem like a copy of a copy of a copy. Faded, a shadow of the original. Lacking life or personality. We’re not at that level as yet, and excitement around the latest version of the GPT model is high right now, but there is a risk that automated material will be restricted by what’s come before, which will make originality more attention-grabbing. In that context, maybe you’re better writing off your own LinkedIn summary – but at the same time, many people have a lot of trouble coming up with good LinkedIn profile content, and this could be a valuable addition in this respect. LinkedIn’s also testing a new AI-powered job description tool, which will make it faster and easier to write job descriptions. ",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user1)
    .postArticle(
      "‘Apocalyptic Conflict’: Attack On Russian Aircraft In Neutral Airspace Will Be Seen As Declaration Of War — Top Diplomat",
      "A deliberate attack on a Russian aircraft in neutral airspace would be an open declaration of war against a nuclear power. This was announced by Russian Ambassador to Washington Anatoly Antonov.“Some lawmakers’ calls go far beyond common sense,” he said, commenting on US Senator Lindsey Graham’s (from South Carolina) threats to shoot down Russian planes approaching US aircraft in international airspace. Earlier, the Russian Defense Ministry published a statement stating that there was no impact between the two aircraft (MQ-9 and Su-27) and that the Reaper drone maneuvered abruptly, losing control and crashing. The ministry added that the US drone was flying without transponders and entered airspace that the Russian government had designated as restricted following the start of their special military operations. “The Russian aircraft did not use onboard weapons, did not come into contact with the unmanned aerial vehicle, and returned safely to their home airfield,” the ministry explained. According to Ambassador Antonov, not the Russian pilots but US politicians are inciting the start of an apocalyptic conflict. We do not seek a conflict with nuclear power. We continue to maintain contacts, including through the Ministry of Defense, to prevent unintentional collisions. I would like American politicians to have the same attitude towards relations with Russia,” the ambassador emphasized. Ukraine became the world’s third largest arms importer after Qatar and India in 2022, because of Russia’s full-scale invasion last year, according to a recent report by the Stockholm International Peace Research Institute (SIPRI). The SIPRI report compares weapons sales globally between 2013–17 and 2018–22. It shows that Ukraine imported a few major arms from 1991 until the end of 2021. However, “as a result of military aid from the USA and many European states following the Russian invasion of Ukraine in February 2022, Ukraine became the 3rd biggest importer of major arms during 2022 (after Qatar and India) and the 14th biggest for 2018–22,” the report by SIPRI stated. The report noted that the deliveries to Ukraine were mainly second-hand items from existing stocks, including 228 artillery pieces, an estimated 5000 guided artillery rockets from the US, 280 tanks from Poland, and over 7000 anti-tank missiles from the UK.",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user1)
    .postArticle(
      "LinkedIn Adds AI-Generated Profile Summaries and Job Listings",
      "As a Microsoft-owned company, it’s no surprise to see LinkedIn looking to add more AI elements into its platform, with Microsoft now seeking to integrate OpenAI’s conversational GPT back-end into virtually all of its apps and functions. On LinkedIn, that’ll provide new options for creating your LinkedIn profile, while it’s also adding AI-generated job descriptions, as well as new educational opportunities into AI tech, via LinkedIn Learning. First off, LinkedIn’s adding a new GPT-powered tool that will provide personalized writing suggestions for creating your LinkedIn profile. As you can see in this example, a new feature within LinkedIn Premium will be the option to generate a headline or ‘About’ summary for your LinkedIn presence.Tap on the ‘Start’ button, select what you want it to create, and the system will come up with your LinkedIn profile summary, based on your info, and samples from millions of user entries. Or LinkedIn summaries could all start to look much the same. The risk with replicating content based on existing examples is that everything starts to feel very similar, and as more content is generated by AI over time, then fed into these tools to generate even more content, everything could, eventually, seem like a copy of a copy of a copy. Faded, a shadow of the original. Lacking life or personality. We’re not at that level as yet, and excitement around the latest version of the GPT model is high right now, but there is a risk that automated material will be restricted by what’s come before, which will make originality more attention-grabbing. In that context, maybe you’re better writing off your own LinkedIn summary – but at the same time, many people have a lot of trouble coming up with good LinkedIn profile content, and this could be a valuable addition in this respect. LinkedIn’s also testing a new AI-powered job description tool, which will make it faster and easier to write job descriptions. ",
      {
        value: tokens(0.01),
      }
    );
  tx.wait();

  tx = await newsContract
    .connect(user2)
    .postArticle(
      '"Will Speak In Parliament If They Let Me": Rahul Gandhi To NDTV',
      'New Delhi: Rahul Gandhi today denied giving any anti-India speech on his way to attending parliament, where the ruling BJP has repeatedly demanded his apology for his remarks in London raising concerns about the state of democracy in India."I didn\'t give any Anti India speech," Rahul Gandhi told NDTV. Asked whether he would respond to the BJP\'s allegation that he insulted the nation on foreign soil, the Congress MP said: "I will speak inside the House if they allow me to. "However, both houses of the parliament were adjourned for the day shortly after re-convening at 2 pm. Several Union Ministers have demanded that Mr Gandhi apologise to the nation for his speeches in the UK, seen to be critical of the government. "The person who speaks the most in this country, and targets the government day and night, says abroad that he does not have the freedom to speak in India,"Union Law Minister Kiren Rijiju told reporters',
      { value: tokens(0.01) }
    );
  tx.wait();

  tx = await newsContract
    .connect(user3)
    .postArticle(
      "Result of North Andhra graduates constituency MLC poll likely to be delayed",
      "The declaration of the result of the North Andhra Graduates MLC constituency elections, for which counting was taken up at Swarna Bharati Indoor Stadium, Visakhapatnam, on Thursday, is likely to be delayed. According to officials, the counting process will take over 12 hours. Besides, the AP High Court, following a petition by a contestant, in its order, stated that the result announcement would be subject to its final verdict. Owing to the two factors, the North Andhra MLC elections result may be announced late at night or on Friday upon counting votes in Visakhapatnam. The counting is being taken up in two phases with the participation of two teams. As many as 37 candidates are in the fray and the main contest is only among four candidates- PVN Madhav of BJP, S Sudhakar of YSRCP, V Chiranjeevi Rao of TDP and Ramaprabha of PDF. The YSRCP has fielded the candidate in the constituency for the first time after the party’s inception while MLC Madhav is presently representing the constituency. Taking the election as a prestigious one, the main parties campaigned vigorously for their candidates’ victory. The opposition parties accused the ruling party of indulging in irregularities like the distribution of money and registration of bogus votes. Over two lakh graduates cast their vote during the MLC elections in the constituency spreading over six districts (Srikakulam, Manyam, Vizianagaram, Alluri Sitharama Raju, Visakhapatnam, and Anakapalli).",
      { value: tokens(0.01) }
    );
  tx.wait();

  console.log("Added 10 articles");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
