#!/usr/bin/env node

const Card = require('npmcard');

let card = new Card();

const user = {
	name: 'Front-End Foxes',
	npm: 'frontendfoxes',
	github: 'frontendfoxes',
	twitter: 'frontendfoxes',
	web: 'https://www.frontendfoxes.org',
	avatar: '|\\__/|',
	avatar2: '/     \\',
	avatar3: '/_.~ ~._\\',
	avatar4: '\\@/',
};

const title = card.chalk.red;
const link = card.chalk.green;
const label = card.chalk.white.bold;
const text = card.chalk.white;

card.setHeader(title(user.name))
	.addRow([
		label('     Who:'),
		text(
			`Foxy People Who Identify As Women and Who Want To Learn Front-End Technologies to Create Web and Mobile Apps`
		),
	])
	.addRow([label('     NPM:'), link(`https://www.npmjs.com/~${user.npm}`)])
	.addRow([label('  GitHub:'), link(`https://github.com/${user.github}`)])
	.addRow([label(' Twitter:'), link(`https://twitter.com/${user.twitter}`)])
	.addRow([label('     Web:'), link(`${user.web}`)])
	.addRowEmpty()
	.addRow([label('        '), text(`    ${user.avatar}`)])
	.addRow([label('        '), text(`    ${user.avatar2}`)])
	.addRow([label('        '), text(`   ${user.avatar3}`)])
	.addRow([label('        '), text(`      ${user.avatar4}`)])
	.addRowEmpty()
	.addRow([label('   Card:'), text(`npx ${user.npm}`)])
	.show();
