Blockly.Blocks['Thing/thing2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Thing/thing2",
			  "message0" : "%1 {} %2 ",
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
				
			],
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Action/action'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Action/action",
			  "message0" : "* %1 %2 ?{} %3 {} %4 ",
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
				
			],
			  "colour" : 72,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 39,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare5",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Thing/thing1'] = {
	init: function() {
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Thing_parameters", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
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
			  "message0" : "[] %1 %2 : %3 %4 = %5 %6 %7 ",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 31,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare1",
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
			  "message0" : "When %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["When", "epsilon"]
				},
				
			],
			  "colour" : 85,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "when",
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
			  "message0" : "[] %1 %2 : %3 %4 ",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				
			],
			  "colour" : 253,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare4",
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
			  "colour" : 4,
			  
			  "previousStatement" : "Event",
			  "nextStatement" : "Event",
			  "inputsInline" : true,
			  "tooltip" : "event2",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 137,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare7",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Event"
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
			  "colour" : 227,
			  
			  "previousStatement" : "Event",
			  "nextStatement" : "Event",
			  "inputsInline" : true,
			  "tooltip" : "event1",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExprType/integer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType/integer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Integer"]
				},
				
			],
			  "colour" : 234,
			  "output" : "ExprType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Dot_Id/dot_id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Dot_Id/dot_id",
			  "message0" : ". %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Dot_Id"
				},
				
			],
			  "colour" : 175,
			  
			  "previousStatement" : "Dot_Id",
			  "nextStatement" : "Dot_Id",
			  "inputsInline" : true,
			  "tooltip" : "dot_id",
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
			  "colour" : 111,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref3",
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
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ExprType",
				  "type" : "input_value",
				  "check" : ["ExprType"]
				},
				
			],
			  "colour" : 247,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "exp1",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Declare", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 175,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params4",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				
			],
			  "colour" : 103,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare8",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExprType/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType/string",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 355,
			  "output" : "ExprType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
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
			  "message0" : "%1 [ %2 %3 ] %4 %5 %6 %7 { %8 %9 } %10 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "When"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declare",
				  "type" : "input_statement",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "When"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "When"
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 67,
			  
			  "previousStatement" : "When",
			  "nextStatement" : "When",
			  "inputsInline" : true,
			  "tooltip" : "when1",
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
			  
			  "colour" : 248,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params1",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Integer/inte'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Integer/inte",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IntegerName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 241,
			  "output" : "Integer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "colour" : 10,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref2",
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
			  "message0" : "Event %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Event", "epsilon"]
				},
				
			],
			  "colour" : 305,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "event",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 107,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare6",
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
			  "message0" : "[] %1 %2 : %3 %4 = %5 %6 ",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 278,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExprType/ref'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExprType/ref",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Ref",
				  "type" : "input_value",
				  "check" : ["Ref"]
				},
				
			],
			  "colour" : 95,
			  "output" : "ExprType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref",
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
			  "message0" : "Declare %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Declare", "epsilon"]
				},
				
			],
			  "colour" : 260,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "declare",
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
			  "colour" : 126,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref1",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Declare"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 305,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare3",
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
				  "text" : "String"
				},
				
			],
			  "colour" : 40,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  
			  "colour" : 39,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params2",
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
			  "colour" : 309,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Declare", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 179,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
   toolboxPosition: 'start', // end
   trashcan: true
});

const langGen = new Blockly.Generator('LangGen');

	
workspace.addChangeListener(Blockly.Events.disableOrphans);
	

 //Storage options
//BlocklyStorage.backupOnUnload();	
//window.setTimeout(BlocklyStorage.restoreBlocks, 0);

langGen['Thing/thing2'] = function(block) {
	function getBlockValues(a) {
			const returnBlock = a.getDescendants(true);
				if (returnBlock.length > 0) {
					var counter = 0;
					var returnString = '';
					//while (typeof returnBlock[counter] !== 'undefined') {
					//	returnString += returnBlock[counter] + '\n';
					//	counter += 1;
					//}
					
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

langGen['Action/action'] = function (block) {
	return '';
}

langGen['Declare/declare5'] = function (block) {
	return '';
}

langGen['Thing/thing1'] = function(block) {
	function getBlockValues(a) {
			const returnBlock = a.getDescendants(true);
				if (returnBlock.length > 0) {
					var counter = 0;
					var returnString = '';
					//while (typeof returnBlock[counter] !== 'undefined') {
					//	returnString += returnBlock[counter] + '\n';
					//	counter += 1;
					//}
					
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

langGen['Declare/declare1'] = function (block) {
	return '';
}

langGen['Thing_parameters/when'] = function (block) {
	return '';
}

langGen['Declare/declare4'] = function (block) {
	return '';
}

langGen['Event/event2'] = function (block) {
	return '';
}

langGen['Declare/declare7'] = function (block) {
	return '';
}

langGen['Event/event1'] = function (block) {
	return '';
}

langGen['ExprType/integer'] = function (block) {
	return '';
}

langGen['Dot_Id/dot_id'] = function (block) {
	return '';
}

langGen['Ref/ref3'] = function (block) {
	return '';
}

langGen['Expr/exp1'] = function (block) {
	return '';
}

langGen['Params/params4'] = function (block) {
	return '';
}

langGen['Declare/declare8'] = function (block) {
	return '';
}

langGen['ExprType/string'] = function (block) {
	return '';
}

langGen['When/when1'] = function (block) {
	return '';
}

langGen['Params/params1'] = function (block) {
	return '';
}

langGen['Integer/inte'] = function (block) {
	return '';
}

langGen['Ref/ref2'] = function (block) {
	return '';
}

langGen['Thing_parameters/event'] = function (block) {
	return '';
}

langGen['Declare/declare6'] = function (block) {
	return '';
}

langGen['Declare/declare2'] = function (block) {
	return '';
}

langGen['ExprType/ref'] = function (block) {
	return '';
}

langGen['Thing_parameters/declare'] = function (block) {
	return '';
}

langGen['Ref/ref1'] = function (block) {
	return '';
}

langGen['Declare/declare3'] = function (block) {
	return '';
}

langGen['String/s'] = function (block) {
	return '';
}

langGen['Params/params2'] = function (block) {
	return '';
}

langGen['Id'] = function (block) {
	return '';
}

langGen['Params/params3'] = function (block) {
	return '';
}

function myUpdateFunction(event) {
	var code = langGen.workspaceToCode(workspace);
	editor.setValue(code);
}
	
workspace.addChangeListener(myUpdateFunction);

function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	