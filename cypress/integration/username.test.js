const { RockPaperScissors } = require(`../../resources/scripts/rock_paper_scissors.js`);
const mathRandomSpy = jest.spyOn(Math, `random`);

// Cypress didn't create an integration folder here so I'm just using 
// the same testing that I used in the tests folder. Since gameHistoryLog is an array,
// I check if the first element matches the expected string.
describe(`RockPaperScissors class`, function () {
  // Test the play function
  describe(`play()`, function() {
    // Test Scissors selection
    it(`Math.Random = 0.9 -> Scissors`, function() {
      // Have CPU choose rock
      mathRandomSpy.mockImplementation(() => 0.1);
      // Instantiate the game
      const game = new RockPaperScissors();
      // Set player name
      game.username = `name`;
      // Make player choose scissors
      game.play(`scissors`);
      // Compare results
      expect(game.gameHistoryLog[0]).toStrictEqual(` name selected scissors. CPU selected rock: name loses`);
    });

    // Test Paper selection
    it(`Math.Random = 0.5 -> Paper`, function() {
      // Have CPU choose rock
      mathRandomSpy.mockImplementation(() => 0.1);
      // Instantiate the game
      const game = new RockPaperScissors();
      // Set player name
      game.username = `name`;
      // Make player choose paper
      game.play(`paper`);
      // Compare results
      expect(game.gameHistoryLog[0]).toStrictEqual(` name selected paper. CPU selected rock: name wins`);
    });
    
    // Test Rock selection
    it(`Math.Random = 0.1 -> Rock`, function() {
      // Have CPU choose rock
      mathRandomSpy.mockImplementation(() => 0.1);
      // Instantiate the game
      const game = new RockPaperScissors();
      // Set player name
      game.username = `name`;
      // Make player choose paper
      game.play(`rock`);
      // Compare results
      expect(game.gameHistoryLog[0]).toStrictEqual(` name selected rock. CPU selected rock: name ties`);
    });
  });
});