
var ncbi = require('nickleby.js'),
    usa_affiliation_strings = {
      "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ",
      "Arkansas": "AR", "California": "CA", "Colorado": "CO", "Connecticut": "CT",
      "Delaware": "DE", "District of Columbia": "DC", "Florida": "FL",
      "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL",
      "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY",
      "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
      "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN",
      "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE",
      "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
      "New York": "NY", "North Carolina": "NC", "North Dakota": "ND",
      "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR",
      "Pennsylvania": "PA", "Puerto Rico": "PR", "Rhode Island": "RI",
      "South Carolina": "SC", "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX",
      "Utah": "UT", "Vermont": "VT", "Virginia": "VA",
      "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI",
      "Wyoming": "WY", "US": "US", "USA": "USA",
    }; // XXX What's the effect of looking for, for example, DC vs D.C.? MA vs M.A.?

var search = ncbi.makeSearchObject(),
    old_term,
    state_abbreviation;

for (var s in usa_affiliation_strings) {
  if (usa_affiliation_strings.hasOwnProperty(s)) {
    console.log(s);
    old_term = search.param('term');
    state_abbreviation = usa_affiliation_strings[s];
    search.param('term', old_term + ' AND ' + state_abbreviation + '[ad]');
  }
}
