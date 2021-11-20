const { NlpManager, ConversationContext } = require("node-nlp");
const fs = require("fs");
var suburbsJSON = require("./suburbs.json");
const { resolve } = require("path");
const manager = new NlpManager({ languages: ["en"] });
const context = new ConversationContext();
// 1 - Train the IA
async function trainChatBotIA() {
  return new Promise(async (resolve, reject) => {
    manager.addNamedEntityText("name", "Minh", ["en"], ["minh", "Minh"]);
    manager.addNamedEntityText("name", "Mohsin", ["en"], ["mohsin", "Mohsin"]);
    manager.addNamedEntityText("name", "Alan", ["en"], ["alan", "Alan"]);
    manager.addNamedEntityText("name", "Sanuj", ["en"], ["sanuj", "Sanuj"]);
    manager.addNamedEntityText(
      "name",
      "Aishwarya",
      ["en"],
      ["aishwarya", "Aishwarya"]
    );
    manager.addNamedEntityText("name", "Alan", ["en"], ["alan", "Alan"]);
    manager.addNamedEntityText("name", "Abdul", ["en"], ["abdul", "Abdul"]);
    manager.addNamedEntityText("name", "Ritu", ["en"], ["ritu", "Ritu"]);
    manager.addNamedEntityText("name", "Asif", ["en"], ["asif", "Asif"]);
    manager.addNamedEntityText("name", "Priya", ["en"], ["priya", "Priya"]);
    manager.addNamedEntityText("name", "Rahul", ["en"], ["rahul", "Rahul"]);

    manager.addNamedEntityText(
      "service",
      "Rent",
      ["en"],
      ["renting", "Renting", "rent", "Rent"]
    );
    manager.addNamedEntityText(
      "service",
      "Buy",
      ["en"],
      ["buying", "Buying", "buy", "Buy"]
    );
    manager.addNamedEntityText(
      "service",
      "Sell",
      ["en"],
      ["selling", "Selling", "sell", "Sell"]
    );
    manager.addNamedEntityText(
      "property",
      "apartment",
      ["en"],
      ["apartment", "Apartment"]
    );
    manager.addNamedEntityText(
      "property",
      "townhouse",
      ["en"],
      ["townhouse", "Townhouse"]
    );
    manager.addNamedEntityText("property", "house", ["en"], ["house", "House"]);
    manager.addNamedEntityText("property", "unit", ["en"], ["unit", "Unit"]);
    manager.addNamedEntityText("bedroom", "1 bedroom", ["en"]);
    manager.addNamedEntityText(
      "bedroom",
      "2 bedrooms",
      ["en"],
      ["2 bedroom", "2 Bedrooms", "2 Bedroom"]
    );
    manager.addNamedEntityText(
      "bedroom",
      "3 bedrooms",
      ["en"],
      ["3 bedroom", "3 Bedrooms", "3 Bedroom"]
    );
    manager.addNamedEntityText("bathroom", "1 bathroom", ["en"]);
    manager.addNamedEntityText(
      "bathroom",
      "2 bathrooms",
      ["en"],
      ["2 bathroom", "2 Bathrooms", "2 Bathroom"]
    );
    manager.addNamedEntityText(
      "bathroom",
      "3 bathrooms",
      ["en"],
      ["3 bathroom", "3 Bathrooms", "3 Bathroom"]
    );
    manager.addNamedEntityText("parking_space", "1 parking space", ["en"]);
    manager.addNamedEntityText(
      "parking_space",
      "2 parking spaces",
      ["en"],
      ["2 parking space", "2 Parking Space", "2 Parking Spaces"]
    );
    manager.addNamedEntityText(
      "parking_space",
      "3 parking spaces",
      ["en"],
      ["3 parking space", "3 Parking Space", "3 Parking Spaces"]
    );
    manager.addNamedEntityText(
      "furnish",
      "furnished",
      ["en"],
      ["furnished", "Furnished"]
    );
    manager.addNamedEntityText(
      "furnish",
      "unfurnished",
      ["en"],
      ["unfurnished", "Unfurnished"]
    );

    manager.addRegexEntity("number", "en", /(?<numbers>[0-9]+)/);

    manager.addNamedEntityText(
      "state",
      "NSW",
      ["en"],
      ["nsw", "NSW", "New South Wales", "new south wales"]
    );
    manager.addNamedEntityText(
      "state",
      "ACT",
      ["en"],
      [
        "act",
        "ACT",
        "Australian Capital Territory",
        "australian capital territory",
      ]
    );
    manager.addNamedEntityText(
      "state",
      "VIC",
      ["en"],
      ["vic", "VIC", "Victoria", "victoria"]
    );
    manager.addNamedEntityText(
      "state",
      "QLD",
      ["en"],
      ["qld", "QLD", "Queensland", "queensland"]
    );
    manager.addNamedEntityText(
      "state",
      "TAS",
      ["en"],
      ["tas", "TAS", "Tasmania", "tasmania"]
    );
    manager.addNamedEntityText(
      "state",
      "SA",
      ["en"],
      ["sa", "SA", "South Australia", "south australia"]
    );
    manager.addNamedEntityText(
      "state",
      "WA",
      ["en"],
      ["wa", "WA", "Western Australia", "western australia"]
    );
    manager.addNamedEntityText(
      "state",
      "NT",
      ["en"],
      ["nt", "NT", "Northern Territory", "northern territory"]
    );

    for (var suburb of suburbsJSON.data) {
      var name = suburb.suburb;
      manager.addNamedEntityText(
        "suburb",
        name,
        ["en"],
        [name, name.charAt(0).toUpperCase() + name.slice(1)]
      );
    }
    manager.addRegexEntity(
      "email",
      "en",
      /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/
    );

    manager.addNamedEntityText(
      "yes_confirm",
      "yes",
      ["en"],
      ["yes", "Yes", "yeah", "Yeah"]
    );
    manager.addNamedEntityText(
      "no_confirm",
      "no",
      ["en"],
      ["no", "No", "nah", "Nah"]
    );

    // // Train also the NLG
    // Adds the utterances and intents for the NLP
    manager.addDocument("en", "goodbye for now", "bye");
    manager.addDocument("en", "My name is %name%", "name");
    manager.addDocument("en", "%name%", "name");
    manager.addDocument("en", "%service%", "service");
    manager.addDocument("en", "%property%", "property");
    manager.addDocument("en", "%bedroom%", "bedroom");
    manager.addDocument("en", "%bathroom%", "bathroom");
    manager.addDocument("en", "%parking_space%", "parking_space");
    manager.addDocument("en", "%furnish%", "furnish");
    manager.addDocument("en", "%number%", "budget");
    manager.addDocument("en", "%state%", "state");
    manager.addDocument("en", "%suburb%", "suburb");
    manager.addDocument("en", "My email is %email%", "email");
    manager.addDocument("en", "my email is %email%", "email");
    manager.addDocument("en", "My email address is %email%", "email");
    manager.addDocument("en", "my email is %email%", "email");
    manager.addDocument("en", "My phone number is %number%", "phone");
    manager.addDocument("en", "my phone number is %number%", "phone");
    manager.addDocument("en", "my number is %number%", "phone");
    manager.addDocument("en", "My number is %number%", "phone");
    manager.addDocument("en", "%yes_confirm%", "yes_confirm");
    manager.addDocument("en", "%no_confirm%", "no_confirm");
    // Train also the NLG
    manager.addAnswer("en", "bye", "Goodbye {{name}}");
    manager.addAnswer(
      "en",
      "name",
      "Hi {{name}}, how can I help you today?\n\n1. Rent a property\n2. Buy a property\n3. Sell a property"
    );

    manager.addAnswer(
      "en",
      "service",
      "Awesome. May I ask which kind of property is it? ?\n\n1. Apartment \n2. Townhouse\n3. House \n4. Unit"
    );
    manager.addAnswer(
      "en",
      "property",
      "I'm thrilled to hear that you want to {{service}} a/an {{property}} with us. What is your weekly budget?"
    );
    manager.addAnswer(
      "en",
      "budget",
      "Select your preferred furnishing type \n1. Furnished \n2. Unfurnished"
    );
    manager.addAnswer("en", "furnish", "How about suburb?");
    manager.addAnswer(
      "en",
      "suburb",
      "Please enter the state you're currently residing in."
    );
    manager.addAnswer("en", "state", "How many bedrooms are you looking for?");
    manager.addAnswer(
      "en",
      "bedroom",
      "How many bathrooms would you like in this {{property}}?"
    );
    manager.addAnswer(
      "en",
      "bathroom",
      "How many parking spaces would you like in this {{property}}?"
    );

    manager.addAnswer(
      "en",
      "parking_space",
      "Sounds good. May I have your email address?"
    );
    manager.addAnswer("en", "email", "How about phone number?");

    manager.addAnswer(
      "en",
      "phone",
      "Thank you for your time {{name}} and I'd like to confirm your contact details before my colleagues reach out to you." +
        "\n\nName: {{name}}" +
        "\nEmail: {{email}}" +
        "\nPhone: {{number}}" +
        "\n\nAre they correct?"
    );

    manager.addAnswer(
      "en",
      "yes_confirm",
      "Wonderful. My colleague will call you as soon as they can. Thanks for your time and have a good day!"
    );
    manager.addAnswer(
      "en",
      "no_confirm",
      "I'm sorry to hear that. Let's start over. Can you please tell me your name?"
    );

    // SELLING
    manager.addNamedEntityText(
      "property_sell",
      "apartment",
      ["en"],
      ["apartment", "Apartment"]
    );
    manager.addNamedEntityText(
      "property_sell",
      "townhouse",
      ["en"],
      ["townhouse", "Townhouse"]
    );
    manager.addNamedEntityText(
      "property_sell",
      "house",
      ["en"],
      ["house", "House"]
    );
    manager.addNamedEntityText(
      "property_sell",
      "unit",
      ["en"],
      ["unit", "Unit"]
    );

    // Adds the utterances and intents for the NLP
    manager.addDocument("en", "Sell", "selling");
    manager.addDocument("en", "Selling", "selling");
    manager.addDocument("en", "sell", "selling");
    manager.addDocument("en", "selling", "selling");
    manager.addDocument("en", "My expected selling price is %price%", "price");
    manager.addDocument("en", "My selling price is %price%", "price");
    manager.addDocument("en", "My expected price is %price%", "price");
    manager.addDocument("en", "My price is %price%", "price");
    manager.addDocument(
      "en",
      "I want to sell a %property_sell%",
      "property_sell"
    );
    // Train also the NLG

    manager.addAnswer(
      "en",
      "selling",
      "Awesome. May I ask which kind of property is it? ?\n\n1. Apartment \n2. Townhouse\n3. House \n4. Unit"
    );
    manager.addAnswer(
      "en",
      "property_sell",
      "What is your expected selling price?"
    );

    manager.addAnswer("en", "price", "What is your residing suburb?");

    await manager.train();
    manager.save();
    console.log("AI has been trained");
    resolve(true);
  });
}

async function generateResponseAI(input) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", input, context);
    resolve(response);
  });
}

async function checkSelling(sellObj, property) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    let temp = sellObj;
    if (sellObj.intent === "state") {
      temp.answer = `I'd like to know more about this listing. How many bedrooms are there in this ${property}?`;
    }
    if (sellObj.intent === "bedroom") {
      temp.answer = `How about the number of bathrooms?`;
    }
    if (sellObj.intent === "bathroom") {
      temp.answer = `And the parking spaces?`;
    }
    resolve(temp);
  });
}

async function checkBuying(buyObj, property) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    let temp = buyObj;
    if (buyObj.intent === "property") {
      temp.answer = `I can definitely help you with purchasing a new ${property}. What is your budget?`;
    }
    resolve(temp);
  });
}
const connectWebSocket = (io) => {
  let state = {};
  io.on("connection", function (socket) {
    socket.on("join", (userId) => {
      socket.join(userId);
      state = { service: "" };
      console.log("New user joined!");
    });

    socket.on("new-msg", async function (data) {
      let response = await generateResponseAI(data.msg);

      // Change questions according to service
      if (state["service"] === "selling") {
        response = await checkSelling(response, state["property"]);
      }
      if (state["service"] === "Buying") {
        response = await checkBuying(response, state["property"]);
      }

      // Send message to the chat room
      io.to(data.room).emit(
        "send-msg-response",
        response.answer !== undefined
          ? response.answer
          : "I am sorry, I don't understand :( "
      );

      // If conversation ends, save to database
      if (response.utterance === "yes" && response.intent === "yes_confirm") {
        console.log(state);
      } else {
        // Save response to state
        let last = response.entities.length - 1;
        if (response.intent === "selling") {
          state["service"] = "selling";
        } else {
          let fields = response.intent.replace("_sell", "");
          state[fields] = response.entities[last].sourceText;
        }
      }
      //console.log(response);
      console.log(state);
    });
  });
};

module.exports = {
  connectWebSocket,
  trainChatBotIA,
};
