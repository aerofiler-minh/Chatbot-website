const { NlpManager, ConversationContext } = require("node-nlp");

const manager = new NlpManager({ languages: ["en"] });
const context = new ConversationContext();
// 1 - Train the IA
async function trainChatBotIA() {
  return new Promise(async (resolve, reject) => {
    manager.addNamedEntityText("name", "Minh", ["en"], ["minh", "Minh"]);
    manager.addNamedEntityText("name", "Mohsin", ["en"], ["mohsin", "Mohsin"]);
    manager.addNamedEntityText("name", "Alan", ["en"], ["alan", "Alan"]);
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
    manager.addNamedEntityText("bedroom", "2 bedrooms", ["en"]);
    manager.addNamedEntityText("bedroom", "3 bedrooms", ["en"]);
    manager.addNamedEntityText("bathroom", "1 bathroom", ["en"]);
    manager.addNamedEntityText("bathroom", "2 bathrooms", ["en"]);
    manager.addNamedEntityText("bathroom", "3 bathrooms", ["en"]);
    manager.addNamedEntityText("parking_space", "1 parking space", ["en"]);
    manager.addNamedEntityText("parking_space", "2 parking spaces", ["en"]);
    manager.addNamedEntityText("parking_space", "3 parking spaces", ["en"]);
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
    manager.addNamedEntityText("budget", "100", ["en"]);
    manager.addNamedEntityText("budget", "200", ["en"]);
    manager.addNamedEntityText("budget", "300", ["en"]);
    manager.addNamedEntityText(
      "state",
      "NSW",
      ["en"],
      ["nsw", "NSW", "New South Wales", "new south wales"]
    );
    manager.addNamedEntityText(
      "suburb",
      "Ashfield",
      ["en"],
      ["ashfield", "Ashfield"]
    );
    manager.addRegexEntity("email", "en", /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);

    manager.addRegexEntity(
      "phone",
      "en",
      /\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|(0[1-9])?( ?-?[0-9]){7,9}/
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
    // Adds the utterances and intents for the NLP
    // // Train also the NLG
    // Adds the utterances and intents for the NLP
    manager.addDocument("en", "goodbye for now", "bye");
    manager.addDocument("en", "My name is %name%", "welcome");
    manager.addDocument("en", "%name%", "welcome");
    manager.addDocument("en", "%service%", "service");
    manager.addDocument("en", "%property%", "property");
    manager.addDocument("en", "%bedroom%", "bedroom");
    manager.addDocument("en", "%bathroom%", "bathroom");
    manager.addDocument("en", "%parking_space%", "parking_space");
    manager.addDocument("en", "%furnish%", "furnish");
    manager.addDocument("en", "%budget%", "budget");
    manager.addDocument("en", "%state%", "state");
    manager.addDocument("en", "%suburb%", "suburb");
    manager.addDocument("en", "My email is %email%", "email");
    manager.addDocument("en", "%phone%", "phone");
    manager.addDocument("en", "%yes_confirm%", "yes_confirm");
    manager.addDocument("en", "%no_confirm%", "no_confirm");
    // Train also the NLG
    manager.addAnswer("en", "bye", "Goodbye {{name}}");
    manager.addAnswer(
      "en",
      "welcome",
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
      "I'm thrilled to hear that you want to {{service}} a/an {{property}} with us. How many bedrooms are you looking for?"
    );
    manager.addAnswer(
      "en",
      "bedroom",
      "{{bedroom}} bed. How many bathrooms would you like in this {{property}}?"
    );
    manager.addAnswer(
      "en",
      "bathroom",
      "How many parking spaces would you like in this {{property}}?"
    );
    manager.addAnswer(
      "en",
      "parking_space",
      "Select your preferred furnishing type \n1. Furnished \n2. Unfurnished"
    );
    manager.addAnswer("en", "furnish", "What is your monthly budget?");
    manager.addAnswer(
      "en",
      "budget",
      "Please enter the state you're currently residing in."
    );
    manager.addAnswer(
      "en",
      "state",
      "Great choice but I need to know your preferred suburb as well. Can you give me a name?"
    );
    manager.addAnswer(
      "en",
      "suburb",
      "Sounds good. May I have your email address?"
    );
    manager.addAnswer("en", "email", "{{email}}How about phone number?");
    manager.addAnswer(
      "en",
      "phone",
      "Thank you for your time {{name}} and I'd like to confirm your information before my colleagues contact you." +
        "\n\nName: {{Name}}" +
        "\nService: {{service}} a {{property}}" +
        "\nBedrooms: {{bedroom}}" +
        "\nBathrooms: {{bathroom}}" +
        "\nParking spaces: {{parking_space}}" +
        "\nFurnishing: {{furnish}}" +
        "\nBedrooms: {{bedroom}}" +
        "\nBudget: ${{budget}}" +
        "\nState: {{state}}" +
        "\nSuburb: {{suburb}}" +
        "\nEmail: {{email}}" +
        "\nPhone: {{phone}}" +
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
    await manager.train();
    manager.save();
    console.log("AI has been trained");
    resolve(true);
  });
}

async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", qsm, context);
    resolve(response);
  });
}

const connectWebSocket = (io) => {
  const state = {};
  io.on("connection", function (socket) {
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log("New user joined!");
    });

    socket.on("new-msg", async function (data) {
      let response = await generateResponseAI(data.msg);

      io.to(data.room).emit(
        "send-msg-response",
        response.answer !== undefined
          ? response.answer
          : "I am sorry, I don't understand :( "
      );

      // If conversation ends, save to database
      if (response.utterance === "yes" && response.intent === "yes_confirm") {
        // TODO: save to database
        console.log(state);
      } else {
        // Save response to state
        state[response.intent] = response.utterance;
      }
    });
  });
};

module.exports = {
  connectWebSocket,
  trainChatBotIA,
};
