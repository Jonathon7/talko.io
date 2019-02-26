const { TalkoSession } = require("talko-server");

class SessionHandler extends TalkoSession {
  handleConnection() {
    super.handleConnection();
    console.log("We are connected!!!");
  }
}

module.exports = SessionHandler;
