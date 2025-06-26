const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leaderboard')
    .setDescription('Rodo serverio lyderių lentelę'),

  async execute(interaction) {
    // Dummy leaderboard data
    const leaderboard = [
      { username: 'Jonas', xp: 1200 },
      { username: 'Tomas', xp: 1000 },
      { username: 'Laura', xp: 850 },
    ];

    const embed = new EmbedBuilder()
      .setTitle('🏆 Lyderių Lentelė')
      .setColor(0xfacc15)
      .setDescription(
        leaderboard
          .map((user, index) => `**${index + 1}.** ${user.username} – ${user.xp} XP`)
          .join('\n')
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
