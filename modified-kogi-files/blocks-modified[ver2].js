Blockly.Blocks['Action/action5'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action5",
			  "message0" : "* %1 %2 { %3 %4 } %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 10,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare7'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare7",
			  "message0" : "[] %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 261,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Integer/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Integer/natural",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IntegerName",
				  "type" : "field_number",
				  "value" : 1
				},
				
			],
			  "colour" : 283,
			  "output" : "Integer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Integer",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['String/s'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "String/s",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "\" \""
				},
				
			],
			  "colour" : 311,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "String",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare9'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare9",
			  "message0" : "%1 : %2 %3 %4 = %5 %6 %7 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 175,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Params_sub_formula/declare_comma'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Params_sub_formula/declare_comma",
			  "message0" : "%1 , %2 ",
			  "args0" : [
				{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 36,
			  
			  "previousStatement" : "Params_sub_formula",
			  "nextStatement" : "Params_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "Params sub formula:\n<declare>*\",\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare12'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare12",
			  "message0" : "%1 : %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				
			],
			  "colour" : 70,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['ExprType1/ref'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType1/ref",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Ref",
				  "type" : "input_value",
				  "check" : ["Ref"]
				},
				
			],
			  "colour" : 101,
			  "output" : "ExprType1",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ExprType1:\n{ref}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Event/event2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Event/event2",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Event"
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				
			],
			  "colour" : 202,
			  "output" : "Event",
			  "inputsInline" : true,
			  "tooltip" : "Event:\nId <Params>",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare15'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare15",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 233,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare16'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare16",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				
			],
			  "colour" : 263,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Expr/exp2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/exp2",
			  "message0" : "%1 %2 -> %3 %4 ",
			  "args0" : [
				{
				  "name" : "ExprType1",
				  "type" : "input_value",
				  "check" : ["ExprType1"]
				},
				  	{
				  "name" : "ExprType2",
				  "type" : "input_statement",
				  "check" : ["ExprType2", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				
			],
			  "colour" : 4,
			  "output" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "Expr:\n(String | Number | <ref>) { \".\" (<ref> |<call>) }* [\"->\" (<declare> |<params>)]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When/when4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When/when4",
			  "message0" : "%1 [ %2 %3 ] %4 %5 %6 %7 { %8 %9 } %10 ",
			  "args0" : [
				{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "When_sub_formula",
				  "type" : "input_statement",
				  "check" : ["When_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "id_signal",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 53,
			  "output" : "When",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "When:\n[id] { Id [ \"[\" <declare> \"]\" ] \".\"}^+ Id <Params> \"{\" <action>* \"}\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Expr/exp1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/exp1",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "ExprType1",
				  "type" : "input_value",
				  "check" : ["ExprType1"]
				},
				  	{
				  "name" : "ExprType2",
				  "type" : "input_statement",
				  "check" : ["ExprType2", "epsilon"]
				},
				
			],
			  "colour" : 300,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Expr:\n(String | Number | <ref>) { \".\" (<ref> |<call>) }* [\"->\" (<declare> |<params>)]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Call_sub_formula/star'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Call_sub_formula/star",
			  "message0" : "* %1 , %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 39,
			  
			  "previousStatement" : "Call_sub_formula",
			  "nextStatement" : "Call_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "Call sub formula:\n{(<expr>|\"*\")\",\"}*",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action3",
			  "message0" : "%1 ? %2 { %3 %4 } %5 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 313,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare6'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare6",
			  "message0" : "[] %1 %2 %3 = %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 238,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Call/call1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Call/call1",
			  "message0" : "%1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Call"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Call_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Call_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 172,
			  "output" : "Call",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Call:\n(Id | func) \"(\" {(<expr>|\"*\")\",\"}* \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When/when3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When/when3",
			  "message0" : "%1 %2 %3 %4 { %5 %6 } %7 ",
			  "args0" : [
				{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "When_sub_formula",
				  "type" : "input_statement",
				  "check" : ["When_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "id_signal",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 234,
			  "output" : "When",
			  "inputsInline" : true,
			  "tooltip" : "When:\n[id] { Id [ \"[\" <declare> \"]\" ] \".\"}^+ Id <Params> \"{\" <action>* \"}\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Params/params4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Params/params4",
			  "message0" : "( %1 %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Params_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 232,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Params:\n\"(\" <declare>*\",\" [\"...\"] \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When/when2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When/when2",
			  "message0" : "%1 %2 [ %3 %4 ] %5 %6 %7 %8 { %9 %10 } %11 ",
			  "args0" : [
				{
				  "name" : "id_when",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "When_sub_formula",
				  "type" : "input_statement",
				  "check" : ["When_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "id_signal",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 143,
			  "output" : "When",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "When:\n[id] { Id [ \"[\" <declare> \"]\" ] \".\"}^+ Id <Params> \"{\" <action>* \"}\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Expr/exp3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/exp3",
			  "message0" : "%1 %2 -> %3 %4 ",
			  "args0" : [
				{
				  "name" : "ExprType1",
				  "type" : "input_value",
				  "check" : ["ExprType1"]
				},
				  	{
				  "name" : "ExprType2",
				  "type" : "input_statement",
				  "check" : ["ExprType2", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				
			],
			  "colour" : 157,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Expr:\n(String | Number | <ref>) { \".\" (<ref> |<call>) }* [\"->\" (<declare> |<params>)]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['ExprType1/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType1/string",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "str",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 136,
			  "output" : "ExprType1",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ExprType1:\n{string}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare4",
			  "message0" : "[] %1 %2 : %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				
			],
			  "colour" : 69,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When/when1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When/when1",
			  "message0" : "%1 %2 %3 %4 %5 { %6 %7 } %8 ",
			  "args0" : [
				{
				  "name" : "id_when",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "When_sub_formula",
				  "type" : "input_statement",
				  "check" : ["When_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "id_signal",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 333,
			  "output" : "When",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "When:\n[id] { Id [ \"[\" <declare> \"]\" ] \".\"}^+ Id <Params> \"{\" <action>* \"}\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['ExprType2/ref'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType2/ref",
			  "message0" : ". %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Ref",
				  "type" : "input_value",
				  "check" : ["Ref"]
				},
				
			],
			  "colour" : 326,
			  
			  "previousStatement" : "ExprType2",
			  "nextStatement" : "ExprType2",
			  "inputsInline" : true,
			  "tooltip" : "ExprType2:\n{ref}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Thing_parameters/func'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Thing_parameters/func",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Func",
				  "type" : "input_value",
				  "check" : ["Func"]
				},
				
			],
			  "colour" : 240,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "{func}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action7'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action7",
			  "message0" : "%1 { %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 115,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Params/params1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Params/params1",
			  "message0" : "(...)",
			  
			  "colour" : 143,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Params:\n\"(\" <declare>*\",\" [\"...\"] \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare13'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare13",
			  "message0" : "%1 %2 = %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 72,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Func/func3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Func/func3",
			  "message0" : "%1 %2 %3 -> %4 %5 ",
			  "args0" : [
				{
				  "name" : "id_function",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params1",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params2",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				
			],
			  "colour" : 193,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Func:\n[id] Id <params> \"->\" <params> [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Func/func2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Func/func2",
			  "message0" : "%1 %2 -> %3 %4 { %5 %6 } %7 ",
			  "args0" : [
				{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params1",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params2",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 103,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Func:\n[id] Id <params> \"->\" <params> [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare_sub_formula/dot_id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare_sub_formula/dot_id",
			  "message0" : ". %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 35,
			  
			  "previousStatement" : "Declare_sub_formula",
			  "nextStatement" : "Declare_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "Declare sub formula:\n{id_item}^+\".\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action4",
			  "message0" : "%1 ? %2 { %3 %4 } %5 { %6 %7 } %8 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_false",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 99,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Func/func4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Func/func4",
			  "message0" : "%1 %2 %3 -> %4 %5 { %6 %7 } %8 ",
			  "args0" : [
				{
				  "name" : "id_function",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params1",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params2",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Action",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 270,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Func:\n[id] Id <params> \"->\" <params> [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When_sub_formula/When_sub_formula1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When_sub_formula/When_sub_formula1",
			  "message0" : ". %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 63,
			  
			  "previousStatement" : "When_sub_formula",
			  "nextStatement" : "When_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "When_sub_formula:\n{ Id [ \"[\" <declare> \"]\" ] \".\"}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Ref/ref2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ref/ref2",
			  "message0" : "%1 [ %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Ref"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 326,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Ref:\nId [\"[\" (<expr> | \"*\") \"]\"]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action2",
			  "message0" : "* %1 %2 ? %3 { %4 %5 } %6 { %7 %8 } %9 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_false",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 291,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare11'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare11",
			  "message0" : "%1 : %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 38,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Call/call2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Call/call2",
			  "message0" : "%1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "Func",
				  "type" : "input_value",
				  "check" : ["Func"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Call_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Call_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 100,
			  "output" : "Call",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Call\n(Id | func) \"(\" {(<expr>|\"*\")\",\"}* \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Thing_parameters/event'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Thing_parameters/event",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Event",
				  "type" : "input_value",
				  "check" : ["Event"]
				},
				
			],
			  "colour" : 160,
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "{event}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare1",
			  "message0" : "[] %1 %2 : %3 %4 %5 = %6 %7 %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 15,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action1",
			  "message0" : "* %1 %2 ? %3 { %4 %5 } %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 133,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action8'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action8",
			  "message0" : "%1 { %2 %3 } %4 { %5 %6 } %7 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_false",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 151,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare2",
			  "message0" : "[] %1 %2 : %3 %4 %5 = %6 %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 24,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Action/action6'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action6",
			  "message0" : "* %1 %2 { %3 %4 } %5 { %6 %7 } %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_true",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "action_false",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 42,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "Action:\n[\"*\"] <expr> [\"?\"] \"{\" <action>* \"}\" [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Call_sub_formula/expression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Call_sub_formula/expression",
			  "message0" : "%1 , %2 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 315,
			  
			  "previousStatement" : "Call_sub_formula",
			  "nextStatement" : "Call_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "Call sub formula:\n{(<expr>|\"*\")\",\"}*",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare10'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare10",
			  "message0" : "%1 : %2 %3 %4 = %5 %6 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 328,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare14'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare14",
			  "message0" : "%1 %2 = %3 %4 ",
			  "args0" : [
				{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 242,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['ExprType2/call'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType2/call",
			  "message0" : ". %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Call",
				  "type" : "input_value",
				  "check" : ["Call"]
				},
				
			],
			  "colour" : 354,
			  
			  "previousStatement" : "ExprType2",
			  "nextStatement" : "ExprType2",
			  "inputsInline" : true,
			  "tooltip" : "ExprType2:\n{call}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Ref/ref1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ref/ref1",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Ref"
				},
				
			],
			  "colour" : 271,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Ref:\nId [\"[\" (<expr> | \"*\") \"]\"]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Func/func1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Func/func1",
			  "message0" : "%1 %2 -> %3 %4 ",
			  "args0" : [
				{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Params1",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params2",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				
			],
			  "colour" : 233,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Func:\n[id] Id <params> \"->\" <params> [ \"{\" <action>* \"}\" ]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Thing/thing1'] = {
	init: function() {
		this.setTooltip('Thing: \n Id { (declare | event | when ) }*');
		this.jsonInit(
			{
			  "type" : "Thing/thing1",
			  "message0" : "%1 { %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Thing"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "things",
				  "type" : "input_statement",
				  "check" : ["Thing_parameters"," Event",  "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
			],
			  "colour" : 0,
			  "inputsInline" : true,
			  "tooltip" : "Thing: \n Id { (declare | event | when ) }*",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Event/event1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Event/event1",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "id_event",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Event"
				},
				  	{
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
				},
				
			],
			  "colour" : 96,
			  "output" : "Event",
			  "inputsInline" : true,
			  "tooltip" : "Event:\nId_event Id <Params>",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Params/params2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Params/params2",
			  "message0" : "()",
			  
			  "colour" : 206,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Params:\n\"(\" <declare>*\",\" [\"...\"] \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Ref/ref3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ref/ref3",
			  "message0" : "%1 [*] %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Ref"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 63,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Ref:\nId [\"[\" (<expr> | \"*\") \"]\"]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Thing_parameters/when'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Thing_parameters/when",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "When",
				  "type" : "input_value",
				  "check" : ["When"]
				},
				
			],
			  "colour" : 80,
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "{when}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Thing_parameters/declare'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Thing_parameters/declare",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				
			],
			  "colour" : 10,
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "{declare}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare8'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare8",
			  "message0" : "[] %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				
			],
			  "colour" : 333,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['When_sub_formula/When_sub_formula2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "When_sub_formula/When_sub_formula2",
			  "message0" : ". %1 %2 [ %3 %4 ] %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_source",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declare",
				  "type" : "input_value",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 167,
			  
			  "previousStatement" : "When_sub_formula",
			  "nextStatement" : "When_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "When_sub_formula:\n{ Id [ \"[\" <declare> \"]\" ] \".\"}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare3",
			  "message0" : "[] %1 %2 : %3 %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 132,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['ExprType1/integer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType1/integer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "int",
				  "type" : "input_value",
				  "check" : ["Integer"]
				},
				
			],
			  "colour" : 283,
			  "output" : "ExprType1",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ExprType1:\n{integer}",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Id",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 65,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Declare/declare5'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declare/declare5",
			  "message0" : "[] %1 %2 %3 = %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "id_item",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "Declare_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Declare_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 219,
			  "output" : "Declare",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Declare:\n[\"[]\"] [Id_alias \":\"] {id_item}^+\".\" [\"=\" string_initial] [string_import]",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['Params/params3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Params/params3",
			  "message0" : "( %1 %2 ...) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Params_sub_formula",
				  "type" : "input_statement",
				  "check" : ["Params_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 144,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "Params:\n\"(\" <declare>*\",\" [\"...\"] \")\"",
			  "helpUrl" : ""
			}
		);
	}
}

var toolbox = {
	'kind': 'categoryToolbox',
	'contents': [
		{
			'kind': 'category',
			'name': 'Action',
			'colour': '144',
			'contents': [
				{
					'kind': 'block',
					'type': 'Action/action5'
				}, {
					'kind': 'block',
					'type': 'Action/action3'
				}, {
					'kind': 'block',
					'type': 'Action/action7'
				}, {
					'kind': 'block',
					'type': 'Action/action4'
				}, {
					'kind': 'block',
					'type': 'Action/action2'
				}, {
					'kind': 'block',
					'type': 'Action/action1'
				}, {
					'kind': 'block',
					'type': 'Action/action8'
				}, {
					'kind': 'block',
					'type': 'Action/action6'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Call',
			'colour': '136',
			'contents': [
				{
					'kind': 'block',
					'type': 'Call/call1'
				}, {
					'kind': 'block',
					'type': 'Call/call2'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Call_sub_formula',
			'colour': '177',
			'contents': [
				{
					'kind': 'block',
					'type': 'Call_sub_formula/star'
				}, {
					'kind': 'block',
					'type': 'Call_sub_formula/expression'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Declare_sub_formula',
			'colour': '35',
			'contents': [
				{
					'kind': 'block',
					'type': 'Declare_sub_formula/dot_id'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Declare',
			'colour': '169',
			'contents': [
				{
					'kind': 'block',
					'type': 'Declare/declare7'
				}, {
					'kind': 'block',
					'type': 'Declare/declare9'
				}, {
					'kind': 'block',
					'type': 'Declare/declare12'
				}, {
					'kind': 'block',
					'type': 'Declare/declare15'
				}, {
					'kind': 'block',
					'type': 'Declare/declare16'
				}, {
					'kind': 'block',
					'type': 'Declare/declare6'
				}, {
					'kind': 'block',
					'type': 'Declare/declare4'
				}, {
					'kind': 'block',
					'type': 'Declare/declare13'
				}, {
					'kind': 'block',
					'type': 'Declare/declare11'
				}, {
					'kind': 'block',
					'type': 'Declare/declare1'
				}, {
					'kind': 'block',
					'type': 'Declare/declare2'
				}, {
					'kind': 'block',
					'type': 'Declare/declare10'
				}, {
					'kind': 'block',
					'type': 'Declare/declare14'
				}, {
					'kind': 'block',
					'type': 'Declare/declare8'
				}, {
					'kind': 'block',
					'type': 'Declare/declare3'
				}, {
					'kind': 'block',
					'type': 'Declare/declare5'
				}
			]
		}, {
			'kind': 'category',
			'name': 'ExprType2',
			'colour': '340',
			'contents': [
				{
					'kind': 'block',
					'type': 'ExprType2/ref'
				}, {
					'kind': 'block',
					'type': 'ExprType2/call'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Expr',
			'colour': '153',
			'contents': [
				{
					'kind': 'block',
					'type': 'Expr/exp2'
				}, {
					'kind': 'block',
					'type': 'Expr/exp1'
				}, {
					'kind': 'block',
					'type': 'Expr/exp3'
				}
			]
		}, {
			'kind': 'category',
			'name': 'ExprType1',
			'colour': '173',
			'contents': [
				{
					'kind': 'block',
					'type': 'ExprType1/ref'
				}, {
					'kind': 'block',
					'type': 'ExprType1/string'
				}, {
					'kind': 'block',
					'type': 'ExprType1/integer'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Event',
			'colour': '171',
			'contents': [
				{
					'kind': 'block',
					'type': 'Event/event2'
				}, {
					'kind': 'block',
					'type': 'Event/event1'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Func',
			'colour': '199',
			'contents': [
				{
					'kind': 'block',
					'type': 'Func/func3'
				}, {
					'kind': 'block',
					'type': 'Func/func2'
				}, {
					'kind': 'block',
					'type': 'Func/func3'
				}, {
					'kind': 'block',
					'type': 'Func/func1'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Id',
			'colour': '65',
			'contents': [
				{
					'kind': 'block',
					'type': 'Id'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Integer',
			'colour': '283',
			'contents': [
				{
					'kind': 'block',
					'type': 'Integer/natural'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Params',
			'colour': '181',
			'contents': [
				{
					'kind': 'block',
					'type': 'Params/params4'
				}, {
					'kind': 'block',
					'type': 'Params/params1'
				}, {
					'kind': 'block',
					'type': 'Params/params2'
				}, {
					'kind': 'block',
					'type': 'Params/params3'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Params_sub_formula',
			'colour': '36',
			'contents': [
				{
					'kind': 'block',
					'type': 'Params_sub_formula/declare_comma'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Ref',
			'colour': '220',
			'contents': [
				{
					'kind': 'block',
					'type': 'Ref/ref2'
				}, {
					'kind': 'block',
					'type': 'Ref/ref1'
				}, {
					'kind': 'block',
					'type': 'Ref/ref3'
				}
			]
		}, {
			'kind': 'category',
			'name': 'String',
			'colour': '311',
			'contents': [
				{
					'kind': 'block',
					'type': 'String/s'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Thing',
			'colour': '120',
			'contents': [
				{
					'kind': 'block',
					'type': 'Thing/thing1'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Thing_parameters',
			'colour': '262',
			'contents': [
				{
					'kind': 'block',
					'type': 'Thing_parameters/func'
				}, {
					'kind': 'block',
					'type': 'Thing_parameters/event'
				}, {
					'kind': 'block',
					'type': 'Thing_parameters/when'
				}, {
					'kind': 'block',
					'type': 'Thing_parameters/declare'
				}
			]
		}, {
			'kind': 'category',
			'name': 'When',
			'colour': '190',
			'contents': [
				{
					'kind': 'block',
					'type': 'When/when4'
				}, {
					'kind': 'block',
					'type': 'When/when3'
				}, {
					'kind': 'block',
					'type': 'When/when2'
				}, {
					'kind': 'block',
					'type': 'When/when1'
				}
			]
		}, {
			'kind': 'category',
			'name': 'When_sub_formula',
			'colour': '115',
			'contents': [
				{
					'kind': 'block',
					'type': 'When_sub_formula/When_sub_formula1'
				}, {
					'kind': 'block',
					'type': 'When_sub_formula/When_sub_formula2'
				}
			]
		}
	]
}

var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
	toolboxPosition: 'start',
	trashcan: true,
	theme: {'startHats': true},
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
	zoom:{
			controls: true,
			wheel: true,
			startScale: 1.0,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2,
			pinch: true
		}
});

const langGen = new Blockly.Generator('LangGen');

workspace.addChangeListener(Blockly.Events.disableOrphans);

langGen['Action/action5'] = function (block) {
	return '';
}

langGen['Declare/declare7'] = function (block) {
	return '';
}

langGen['Integer/natural'] = function (block) {
	return '';
}

langGen['String/s'] = function (block) {
	return '';
}

langGen['Declare/declare9'] = function (block) {
	return '';
}

langGen['Params_sub_formula/declare_comma'] = function (block) {
	return '';
}

langGen['Declare/declare12'] = function (block) {
	return '';
}

langGen['ExprType1/ref'] = function (block) {
	return '';
}

langGen['Event/event2'] = function (block) {
	return '';
}

langGen['Declare/declare15'] = function (block) {
	return '';
}

langGen['Declare/declare16'] = function (block) {
	return '';
}

langGen['Expr/exp2'] = function (block) {
	return '';
}

langGen['When/when4'] = function (block) {
	return '';
}

langGen['Expr/exp1'] = function (block) {
	return '';
}

langGen['Call_sub_formula/star'] = function (block) {
	return '';
}

langGen['Action/action3'] = function (block) {
	return '';
}

langGen['Declare/declare6'] = function (block) {
	return '';
}

langGen['Call/call1'] = function (block) {
	return '';
}

langGen['When/when3'] = function (block) {
	return '';
}

langGen['Params/params4'] = function (block) {
	return '';
}

langGen['When/when2'] = function (block) {
	return '';
}

langGen['Expr/exp3'] = function (block) {
	return '';
}

langGen['ExprType1/string'] = function (block) {
	return '';
}

langGen['Declare/declare4'] = function (block) {
	return '';
}

langGen['When/when1'] = function (block) {
	return '';
}

langGen['ExprType2/ref'] = function (block) {
	return '';
}

langGen['Thing_parameters/func'] = function (block) {
	return '';
}

langGen['Action/action7'] = function (block) {
	return '';
}

langGen['Params/params1'] = function (block) {
	return '';
}

langGen['Declare/declare13'] = function (block) {
	return '';
}

langGen['Func/func3'] = function (block) {
	return '';
}

langGen['Func/func2'] = function (block) {
	return '';
}

langGen['Declare_sub_formula/dot_id'] = function (block) {
	return '';
}

langGen['Action/action4'] = function (block) {
	return '';
}

langGen['Func/func3'] = function (block) {
	return '';
}

langGen['When_sub_formula/When_sub_formula1'] = function (block) {
	return '';
}

langGen['Ref/ref2'] = function (block) {
	return '';
}

langGen['Action/action2'] = function (block) {
	return '';
}

langGen['Declare/declare11'] = function (block) {
	return '';
}

langGen['Call/call2'] = function (block) {
	return '';
}

langGen['Thing_parameters/event'] = function (block) {
	return '';
}

langGen['Declare/declare1'] = function (block) {
	return '';
}

langGen['Action/action1'] = function (block) {
	return '';
}

langGen['Action/action8'] = function (block) {
	return '';
}

langGen['Declare/declare2'] = function (block) {
	return '';
}

langGen['Action/action6'] = function (block) {
	return '';
}

langGen['Call_sub_formula/expression'] = function (block) {
	return '';
}

langGen['Declare/declare10'] = function (block) {
	return '';
}

langGen['Declare/declare14'] = function (block) {
	return '';
}

langGen['ExprType2/call'] = function (block) {
	return '';
}

langGen['Ref/ref1'] = function (block) {
	return '';
}

langGen['Func/func1'] = function (block) {
	return '';
}

langGen['Thing/thing1'] = function(block) {
	function getBlockValues(a) {
			const returnBlock = a.getDescendants(true);
				if (returnBlock.length > 0) {
					var counter = 0;
					var returnString = '';
					
					if (typeof returnBlock[counter] !== 'undefined') {
						returnString += returnBlock[counter] + '\n';
					}
					
					return returnString;
				} else {
					return '';
				}
		}

		result = getBlockValues(block)
			
		return result;
}

langGen['Event/event1'] = function (block) {
	return '';
}

langGen['Params/params2'] = function (block) {
	return '';
}

langGen['Ref/ref3'] = function (block) {
	return '';
}

langGen['Thing_parameters/when'] = function (block) {
	return '';
}

langGen['Thing_parameters/declare'] = function (block) {
	return '';
}

langGen['Declare/declare8'] = function (block) {
	return '';
}

langGen['When_sub_formula/When_sub_formula2'] = function (block) {
	return '';
}

langGen['Declare/declare3'] = function (block) {
	return '';
}

langGen['ExprType1/integer'] = function (block) {
	return '';
}

langGen['Id'] = function (block) {
	return '';
}

langGen['Declare/declare5'] = function (block) {
	return '';
}

langGen['Params/params3'] = function (block) {
	return '';
}

function debounce(func, wait) {
	var timeout;

	return function() {
	    clearTimeout(timeout);

	    timeout = setTimeout(() => {
	        func.apply(this, arguments);
	    }, wait);
	}
}

var isUpdating = false;

function blockToTextUpdate() {
	if (isUpdating) {
		isUpdating = false;
	} else {
		isUpdating = true;
		var code = langGen.workspaceToCode(workspace);
		editor.setValue(code);
	}
}

var debouncedB2TUpdate = debounce(blockToTextUpdate, 1000);
	
workspace.addChangeListener(debouncedB2TUpdate);

function textToBlockUpdate() {
	if (isUpdating) {
		isUpdating = false;
	} else {
		isUpdating = true;
		fetch('/parse?' + new URLSearchParams({code: editor.getValue()})).then(
			x => x.text()
		).then( y => {
			if (y.charAt(0) === "E" ) {
				error_bar = document.getElementById('error_bar');
				error_bar.innerHTML = y;
				error_bar.style.opacity = 1;
				isUpdating = false;
			} else {
				var response1 = JSON.parse(y);
				error_bar.style.opacity = 0;
				error_bar.value = "";
				
				Blockly.serialization.workspaces.load(response1, workspace);
			}
		});
	}
}

var debouncedT2BUpdate = debounce(textToBlockUpdate, 1000);

editor.getModel().onDidChangeContent(debouncedT2BUpdate);



function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	const para = document.getElementById("XML_paragraph");
	para.textContent = xml_text;
	console.log(xml_text);
}

function copy_data(containerid) {
	var range = document.createRange();
	range.selectNode(containerid);
	window.getSelection().removeAllRanges(); 
	window.getSelection().addRange(range); 
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	console.log("data copied");
}


// Modal - Start
  var modal = document.getElementById("XMLModal");
  var btn = document.getElementById("modal_btn");
  var span = document.getElementsByClassName("close")[0];  // Get the <span> element that closes the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() { // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
  }
  window.onclick = function(event) {  // When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
// Modal - Finish