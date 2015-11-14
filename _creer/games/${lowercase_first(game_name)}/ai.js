// ${header}
// This is where you build your AI for the ${game_name} game.
<%include file="functions.noCreer" />
var Class = require(__basedir + "/joueur/class");
var BaseAI = require(__basedir + "/joueur/baseAI");

${merge("// ", "requires", "// any additional requires you want can be required here safely between creer runs")}

/**
 * @class
 * @classdesc This is the class to play the ${game_name} game. This is where you should build your AI.
 */
var AI = Class(BaseAI, {
    /**
     * this is the name you send to the server to play as.
     *
     * @memberof AI
     */
    getName: function() {
${merge("        // ", "getName", '        return "' + game_name + ' JavaScript Player";')}
    },

    /**
     * this is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
     *
     * @memberof AI
     */
    start: function() {
${merge("        // ", "start", "        // pass")}
    },

    /**
     * this is called every time the game's state updates, so if you are tracking anything you can update it here.
     *
     * @memberof AI
     */
    gameUpdated: function() {
${merge("        // ", "gameUpdated", "        // pass")}
    },

    /**
     * this is called when the game ends, you can clean up your data and dump files here if need be
     *
     * @memberof AI
     * @param {boolean} won - true means you won, false means you lost
     * @param {string} reason - the human readable string explaining why you won or lost
     */
    ended: function(won, reason) {
${merge("        // ", "ended", "        // pass")}
    },


% for function_name in ai['function_names']:
<%
    function_parms = ai['functions'][function_name]
    argument_string = ""
    argument_names = []
    if 'arguments' in function_parms:
        for arg_parms in function_parms['arguments']:
            argument_names.append(arg_parms['name'])
        argument_string = ", ".join(argument_names)
%>
    /**
     * ${function_parms['description']}
     *
     * @memberof AI
% if 'arguments' in function_parms:
% for arg_parms in function_parms['arguments']:
     * @param {${shared['js']['type'](arg_parms['type'])}} ${arg_parms['name']} - ${arg_parms['description']}
% endfor
% endif
% if function_parms['returns']:
     * @returns {${shared['js']['type'](function_parms['returns']['type'])}} ${function_parms['returns']['description']}
% endif
     */
    ${function_name}: function(${argument_string}) {
${merge("        // ", function_name,
"""        // Put your game logic here for {0}
        return {1};
""".format(function_name, shared['js']['default'](function_parms['returns']['type'], function_parms['returns']['default']) if function_parms['returns'] else "undefined")
)}
    },
% endfor


${merge("    //", "functions", "    // any additional functions you want to add for your AI")}

});

module.exports = AI;
