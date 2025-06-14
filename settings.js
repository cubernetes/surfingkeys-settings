api.addSearchAlias(
	'l',
	'leo-ger-eng',
	'https://dict.leo.org/german-english/',
	's',
	'https://dict.leo.org/dictQuery/m-query/conf/ende/query.conf/strlist.json?q={0}&shortQuery&noDescription&sideInfo=on&where=both&term=',
	resp => JSON.parse(resp.text)[1],
	'o',
	options={favicon_url: 'https://dict.leo.org/img/favicons/leo-32.png'}
);

api.addSearchAlias(
	'v',
	'google-verbatim',
	'https://www.google.com/search?tbs=li:1&q=%22{0}%22',
	's',
	'https://www.google.com/complete/search?client=chrome-omni&gs_ri=chrome-ext&oit=1&cp=1&pgcl=7&tbs=li:1&q=',
	resp => JSON.parse(resp.text)[1]
);

api.removeSearchAlias('w')

api.addSearchAlias(
	'w',
	'wiktionary',
	'https://en.wiktionary.org/wiki/',
	's',
	'https://en.wiktionary.org/w/api.php?action=query&format=json&generator=prefixsearch&gpssearch=',
	resp => Object.values(JSON.parse(resp.text).query.pages).map(e => e.title),
	'o',
	options={favicon_url: 'https://de.wiktionary.org/static/favicon/piece.ico'}
);

api.iunmap('<Ctrl-a>');

// addSearchAlias parameters:
// - alias
// - prompt
// - search_url
// - search_leader_key default "s"
// - suggestion_url default null
// - callback_to_parse_suggestion default null
// - only_this_site_key default "o"
// - options default null
