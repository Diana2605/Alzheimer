const AssistantV1 = require('ibm-watson/assistant/v1');
const {
  IamAuthenticator
} = require('ibm-watson/auth');

const assistant = new AssistantV1({
  version: '2020-06-06',
  authenticator: new IamAuthenticator({
    apikey: 't2jXW_bZK3F8CDE78yDu2fLORRUnK7pCws2AuOENzNfM',
  }),
  url: 'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/45a05f1c-39a1-404c-ba4f-18db51d66a02',
});


const Interaction = {
  callWatsonAssistant: async (messageObject) => {
    console.log('[callWatsonAssistant]');
    try {
      const waInteractionResult = await assistant.message({
        workspaceId: 'e85f6bac-b53f-43d4-a5d7-fb811985a52c',
        input: {
          'text': messageObject.userQuery
        },
        context: messageObject.context
      })
      return waInteractionResult.result;
    } catch (error) {
      console.error("Error in calling Watson Assistant: ", error);
      return new Error(error.message);
    }

  }
}

// export in order to be able to import in other files 
module.exports = Interaction;