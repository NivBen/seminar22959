Blockly.Blocks['Thing/thing1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Thing/thing1",
				"message0": "Thing %1 { %2 %3 } %4 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id",
					},
					
					{
						"name": "",
						"type": "input_dummy",
					},
					{
						"name": "things",
						"type": "input_statement",
						"check": ["Thing_parameters", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 000,
				"inputsInline": false,
				"tooltip": "Id { (declare | event | when )* }",
				"helpUrl": "",
				"style": {
					"hat": "cap"
				}
			}
		);
	}
}

Blockly.Blocks['Thing/thing2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Thing/thing2",
				"message0": "Thing %1 {} %2 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 000,
				"inputsInline": false,
				"tooltip": "Id {}",
				"helpUrl": "",
				"style": {
					"hat": "cap"
				}
			}
		);
	}
}

Blockly.Blocks['Thing_parameters/declare'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Thing_parameters/declare",
				"message0": "Declare %1 %2 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Declare", "epsilon"]
					},

				],
				"colour": 020,

				"previousStatement": "Thing_parameters",
				"nextStatement": "Thing_parameters",
				"inputsInline": true,
				"tooltip": "{declare}*",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Expr/exp1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Expr/exp1",
				"message0": "%1 ",
				"args0": [
					{
						"name": "ExprType",
						"type": "input_value",
						"check": ["ExprType"]
					},

				],
				"colour": 189,
				"output": "Expr",


				"inputsInline": true,
				"tooltip": "ExprType",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Action/action'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Action/action",
				"message0": "* %1 %2 ? %3 {} %4 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "Expr",
						"type": "input_value",
						"check": ["Expr"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 16,
				"previousStatement": "Action",
				"nextStatement": "Action",
				"inputsInline": true,
				"tooltip": "* Expr ? {}",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['When/when1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "When/when1",
				"message0": "%1 [ %2 %3 ] %4 %5 %6 %7 { %8 %9 } ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_when"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "Declare",
						"type": "input_statement",
						"check": ["Declare"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_Signal"
					},
					{
						"name": "Params",
						"type": "input_value",
						"check": ["Params"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Action", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 210,

				"previousStatement": "When",
				"nextStatement": "When",
				"inputsInline": true,
				"tooltip": "[Id_when] {[<declare>].}+ Id_signal <params> { <action>* }",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Ref/ref1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Ref/ref1",
				"message0": "%1 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},

				],
				"colour": 124,
				"output": "Ref",


				"inputsInline": true,
				"tooltip": "Id",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Id'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Id",
				"message0": "%1",
				"args0": [
					{
						"name": "Id",
						"type": "field_input",
						"text": "variable"
					},

				],
				"colour": 201,
				"output": "Id",


				"inputsInline": true,
				"tooltip": "",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['ExprType/Number'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "ExprType/Number",
				"message0": "%1 ",
				"args0": [
					{
						"type": "field_input",
						"name": "variable",
						"text": "12"
					},

				],
				"colour": 340,
				"output": "ExprType",


				"inputsInline": true,
				"tooltip": "Number",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Event/event2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Event/event2",
				"message0": "%1 %2 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},
					{
						"name": "Params",
						"type": "input_value",
						"check": ["Params"]
					},

				],
				"colour": 202,

				"previousStatement": "Event",
				"nextStatement": "Event",
				"inputsInline": true,
				"tooltip": "Id <Params>",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Thing_parameters/when'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Thing_parameters/when",
				"message0": "When %1 %2 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["When", "epsilon"]
					},

				],
				"colour": 040,

				"previousStatement": "Thing_parameters",
				"nextStatement": "Thing_parameters",
				"inputsInline": true,
				"tooltip": "{when}*",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare1",
				"message0": "[] %1 %2 : %3 %4 = %5 %6 %7 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "initial",
						"type": "input_value",
						"check": ["String"]
					},
					{
						"name": "import",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 239,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : id_item = string_initial string_import",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare5'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare5",
				"message0": "[] %1 %2 : %3 %4 %5 = %6 %7 %8 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Dot_Id", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "initial",
						"type": "input_value",
						"check": ["String"]
					},
					{
						"name": "import",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 348,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : {id_item}+\".\" = string_initial string_import",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['ExprType/string'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "ExprType/string",
				"message0": "%1 ",
				"args0": [
					{
						"name": "str",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 288,
				"output": "ExprType",


				"inputsInline": true,
				"tooltip": "string",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Event/event1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Event/event1",
				"message0": "%1 %2 %3 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_Event"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},
					{
						"name": "Params",
						"type": "input_value",
						"check": ["Params"]
					},

				],
				"colour": 96,

				"previousStatement": "Event",
				"nextStatement": "Event",
				"inputsInline": true,
				"tooltip": "Id_event Id <Params>",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Params/params1'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Params/params1",
				"message0": "(...)",

				"colour": 22,
				"output": "Params",


				"inputsInline": true,
				"tooltip": "( ...varicadic )",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Integer/inte'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Integer/inte",
				"message0": "%1 ",
				"args0": [
					{
						"name": "IntegerName",
						"type": "field_number",
						"value": 0
					},

				],
				"colour": 325,
				"output": "Integer",


				"inputsInline": true,
				"tooltip": "",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare8'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare8",
				"message0": "[] %1 %2 : %3 %4 %5 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Dot_Id", "epsilon"]
					},

				],
				"colour": 335,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : {id_item}+\".\"",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare2",
				"message0": "[] %1 %2 : %3 %4 = %5 %6 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "initial",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 99,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : id_item = string_initial",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Dot_Id/dot_id'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Dot_Id/dot_id",
				"message0": ". %1 %2 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},

				],
				"colour": 177,

				"previousStatement": "Dot_Id",
				"nextStatement": "Dot_Id",
				"inputsInline": true,
				"tooltip": "\".\"id_item",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Ref/ref2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Ref/ref2",
				"message0": "%1 [ %2 %3 ] %4 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "Expr",
						"type": "input_value",
						"check": ["Expr"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 175,
				"output": "Ref",


				"inputsInline": true,
				"tooltip": "Id [ {Expr} ]",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Params/params4'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Params/params4",
				"message0": "( %1 %2 ) %3 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "decalre",
						"type": "input_statement",
						"check": ["Declare", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 29,
				"output": "Params",


				"inputsInline": true,
				"tooltip": "( {declare}* )",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Thing_parameters/event'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Thing_parameters/event",
				"message0": "Event %1 %2 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Event", "epsilon"]
					},

				],
				"colour": 030,

				"previousStatement": "Thing_parameters",
				"nextStatement": "Thing_parameters",
				"inputsInline": true,
				"tooltip": "(event)*",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['ExprType/ref'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "ExprType/ref",
				"message0": "%1 ",
				"args0": [
					{
						"name": "Ref",
						"type": "input_value",
						"check": ["Ref"]
					},

				],
				"colour": 152,
				"output": "ExprType",


				"inputsInline": true,
				"tooltip": "ref",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare4'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare4",
				"message0": "[] %1 %2 : %3 %4 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},

				],
				"colour": 5,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : id_item",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare3'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare3",
				"message0": "[] %1 %2 : %3 %4 %5 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "import",
						"type": "input_value",
						"check": ["String"]
					},
				],
				"colour": 29,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : id_item string_import",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['String/s'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "String/s",
				"message0": "%1 ",
				"args0": [
					{
						"name": "StringName",
						"type": "field_input",
						"text": "\" \""
					},

				],
				"colour": 163,
				"output": "String",


				"inputsInline": true,
				"tooltip": "String",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Params/params3'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Params/params3",
				"message0": "( %1 %2 ...) %3 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "decalre",
						"type": "input_statement",
						"check": ["Declare", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 170,
				"output": "Params",


				"inputsInline": true,
				"tooltip": "( {declare}* ...varicadic )",
				"helpUrl": ""
			}
		);
	}
}

Blockly.Blocks['Params/params2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Params/params2",
				"message0": "()",

				"colour": 314,
				"output": "Params",


				"inputsInline": true,
				"tooltip": "()",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Ref/ref3'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Ref/ref3",
				"message0": "%1 [*] %2 ",
				"args0": [
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id"
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 107,
				"output": "Ref",


				"inputsInline": true,
				"tooltip": "Id [*]",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare6'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare6",
				"message0": "[] %1 %2 : %3 %4 %5 = %6 %7 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Dot_Id", "epsilon"]
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "initial",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 135,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : {id_item}+\".\" = string_initial",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Declare/declare7'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Declare/declare7",
				"message0": "[] %1 %2 : %3 %4 %5 %6 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "Id_alias"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "lex",
						"type": "field_input",
						"text": "id_item"
					},
					{
						"name": "stmt",
						"type": "input_statement",
						"check": ["Dot_Id", "epsilon"]
					},
					{
						"name": "import",
						"type": "input_value",
						"check": ["String"]
					},

				],
				"colour": 68,

				"previousStatement": "Declare",
				"nextStatement": "Declare",
				"inputsInline": true,
				"tooltip": "[] Id_alias : {id_item}+\".\" string_import",
				"helpUrl": ""
			}
		);
	}
}
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	grid:
         {spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true},
	move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true},
	zoom:
		{controls: true,
		 wheel: true,
		 startScale: 1.0,
		 maxScale: 3,
		 minScale: 0.3,
		 scaleSpeed: 1.2,
		 pinch: true},
	collapse: true,
	toolboxPosition: 'start', // end
	trashcan: true
});


//Storage options
BlocklyStorage.backupOnUnload();
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}

function copy_data(containerid) {
	var range = document.createRange();
	range.selectNode(containerid); //changed here
	window.getSelection().removeAllRanges(); 
	window.getSelection().addRange(range); 
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	console.log("data copied");
  }
