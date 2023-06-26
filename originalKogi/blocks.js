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
			  "colour" : 203,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action5",
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
			  "colour" : 268,
			  "output" : "Event",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "event2",
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
			  "message0" : "%1 = %2 %3 %4 ",
			  "args0" : [
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
			  "colour" : 29,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare13",
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
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
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
			  "colour" : 300,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "func3",
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
			  "message0" : "[] %1 %2 = %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
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
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 328,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare6",
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
			  "message0" : "[] %1 %2 = %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
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
			  "colour" : 352,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare5",
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
			  "colour" : 303,
			  "output" : "ExprType1",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 93,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare3",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExprType2", "epsilon"]
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
				
			],
			  "colour" : 98,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "exp2",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExprType2", "epsilon"]
				},
				
			],
			  "colour" : 262,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "exp1",
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
			  "colour" : 10,
			  
			  "previousStatement" : "Call_sub_formula",
			  "nextStatement" : "Call_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "star",
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
			  "colour" : 219,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action3",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Call_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 70,
			  "output" : "Call",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "call1",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
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
			  "colour" : 65,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare1",
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
				  "name" : "stmt",
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
			  "colour" : 356,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "exp3",
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
			  "message0" : "%1 %2 %3 { %4 %5 } %6 ",
			  "args0" : [
				{
				  "name" : "stmt",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 279,
			  "output" : "When",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "when2",
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
			  "colour" : 266,
			  "output" : "ExprType1",
			  
			  
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
			  "message0" : "%1 %2 %3 %4 { %5 %6 } %7 ",
			  "args0" : [
				{
				  "name" : "id_when",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "stmt",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Action", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 2,
			  "output" : "When",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "when1",
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
			  "colour" : 331,
			  
			  "previousStatement" : "ExprType2",
			  "nextStatement" : "ExprType2",
			  "inputsInline" : true,
			  "tooltip" : "ref",
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
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 105,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare15",
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
			  "colour" : 229,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "func",
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
			  "colour" : 26,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action7",
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
			  "message0" : "%1 : %2 %3 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				
			],
			  "colour" : 192,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare12",
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
			  
			  "colour" : 57,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params1",
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
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
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
			  "colour" : 3,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "func3",
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
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
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
			  "colour" : 219,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "func2",
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
			  "colour" : 24,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action4",
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
			  "message0" : "[] %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				
			],
			  "colour" : 329,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare8",
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
			  "colour" : 133,
			  
			  "previousStatement" : "Dot_Id",
			  "nextStatement" : "Dot_Id",
			  "inputsInline" : true,
			  "tooltip" : "dot_id",
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
			  "colour" : 299,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref2",
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
			  "colour" : 324,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action2",
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
			  "message0" : "%1 : %2 %3 = %4 %5 %6 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
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
			  "colour" : 155,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare9",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
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
			  "colour" : 357,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare2",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				
			],
			  "colour" : 230,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare4",
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
				  "name" : "decalre",
				  "type" : "input_statement",
				  "check" : ["Declare", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 278,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params4",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Call_sub_formula", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 18,
			  "output" : "Call",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "call2",
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
			  "message0" : "[] %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 135,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare7",
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
			  "colour" : 48,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "event",
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
			  "colour" : 52,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action1",
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
			  "colour" : 7,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action8",
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
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				
			],
			  "colour" : 282,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare16",
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
			  "colour" : 44,
			  
			  "previousStatement" : "Action",
			  "nextStatement" : "Action",
			  "inputsInline" : true,
			  "tooltip" : "action6",
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
			  "colour" : 105,
			  
			  "previousStatement" : "Call_sub_formula",
			  "nextStatement" : "Call_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "expression",
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
			  "message0" : "%1 . %2 ",
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
				
			],
			  "colour" : 299,
			  
			  "previousStatement" : "When_sub_formula",
			  "nextStatement" : "When_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "When_sub_formula1",
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
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
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
				  "name" : "initial",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 190,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare14",
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
				  "value" : 0
				},
				
			],
			  "colour" : 3,
			  "output" : "Integer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
				},
				  	{
				  "name" : "import",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 230,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare11",
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
			  "colour" : 356,
			  
			  "previousStatement" : "ExprType2",
			  "nextStatement" : "ExprType2",
			  "inputsInline" : true,
			  "tooltip" : "call",
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
			  "colour" : 88,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref1",
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
				  "name" : "Params",
				  "type" : "input_value",
				  "check" : ["Params"]
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
			  "colour" : 20,
			  "output" : "Func",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "func1",
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
			  "message0" : "%1 [ %2 %3 ]. %4 ",
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
				  "type" : "input_statement",
				  "check" : ["Declare"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 104,
			  
			  "previousStatement" : "When_sub_formula",
			  "nextStatement" : "When_sub_formula",
			  "inputsInline" : true,
			  "tooltip" : "When_sub_formula2",
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
			  "colour" : 102,
			  "output" : "String",
			  
			  
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
				  "name" : "decalre",
				  "type" : "input_statement",
				  "check" : ["Declare", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 337,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params3",
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
				  "name" : "things",
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
			  "colour" : 292,
			  "output" : "Event",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "event1",
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
			  
			  "colour" : 115,
			  "output" : "Params",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params2",
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
			  "colour" : 95,
			  "output" : "Ref",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ref3",
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
			  "colour" : 277,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "when",
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
				  "type" : "input_statement",
				  "check" : ["Declare"]
				},
				
			],
			  "colour" : 355,
			  
			  "previousStatement" : "Thing_parameters",
			  "nextStatement" : "Thing_parameters",
			  "inputsInline" : true,
			  "tooltip" : "declare",
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
			  "colour" : 77,
			  "output" : "ExprType1",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
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
			  "colour" : 310,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "message0" : "%1 : %2 %3 = %4 %5 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Dot_Id", "epsilon"]
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
			  "colour" : 222,
			  
			  "previousStatement" : "Declare",
			  "nextStatement" : "Declare",
			  "inputsInline" : true,
			  "tooltip" : "declare10",
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
			'colour': '112',
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
			'colour': '44',
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
			'colour': '57',
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
			'name': 'Declare',
			'colour': '205',
			'contents': [
				{
					'kind': 'block',
					'type': 'Declare/declare13'
				}, {
					'kind': 'block',
					'type': 'Declare/declare6'
				}, {
					'kind': 'block',
					'type': 'Declare/declare5'
				}, {
					'kind': 'block',
					'type': 'Declare/declare3'
				}, {
					'kind': 'block',
					'type': 'Declare/declare1'
				}, {
					'kind': 'block',
					'type': 'Declare/declare15'
				}, {
					'kind': 'block',
					'type': 'Declare/declare12'
				}, {
					'kind': 'block',
					'type': 'Declare/declare8'
				}, {
					'kind': 'block',
					'type': 'Declare/declare9'
				}, {
					'kind': 'block',
					'type': 'Declare/declare2'
				}, {
					'kind': 'block',
					'type': 'Declare/declare4'
				}, {
					'kind': 'block',
					'type': 'Declare/declare7'
				}, {
					'kind': 'block',
					'type': 'Declare/declare16'
				}, {
					'kind': 'block',
					'type': 'Declare/declare14'
				}, {
					'kind': 'block',
					'type': 'Declare/declare11'
				}, {
					'kind': 'block',
					'type': 'Declare/declare10'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Dot_Id',
			'colour': '133',
			'contents': [
				{
					'kind': 'block',
					'type': 'Dot_Id/dot_id'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Expr',
			'colour': '238',
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
			'name': 'ExprType2',
			'colour': '343',
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
			'name': 'ExprType1',
			'colour': '215',
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
			'colour': '280',
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
			'colour': '135',
			'contents': [
				{
					'kind': 'block',
					'type': 'Func/func3'
				}, {
					'kind': 'block',
					'type': 'Func/func3'
				}, {
					'kind': 'block',
					'type': 'Func/func2'
				}, {
					'kind': 'block',
					'type': 'Func/func1'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Integer',
			'colour': '3',
			'contents': [
				{
					'kind': 'block',
					'type': 'Integer/natural'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Id',
			'colour': '310',
			'contents': [
				{
					'kind': 'block',
					'type': 'Id'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Params',
			'colour': '196',
			'contents': [
				{
					'kind': 'block',
					'type': 'Params/params1'
				}, {
					'kind': 'block',
					'type': 'Params/params4'
				}, {
					'kind': 'block',
					'type': 'Params/params3'
				}, {
					'kind': 'block',
					'type': 'Params/params2'
				}
			]
		}, {
			'kind': 'category',
			'name': 'Ref',
			'colour': '160',
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
			'colour': '102',
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
			'colour': '227',
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
			'name': 'When_sub_formula',
			'colour': '201',
			'contents': [
				{
					'kind': 'block',
					'type': 'When_sub_formula/When_sub_formula1'
				}, {
					'kind': 'block',
					'type': 'When_sub_formula/When_sub_formula2'
				}
			]
		}, {
			'kind': 'category',
			'name': 'When',
			'colour': '140',
			'contents': [
				{
					'kind': 'block',
					'type': 'When/when2'
				}, {
					'kind': 'block',
					'type': 'When/when1'
				}
			]
		}
	]
}

var workspace = Blockly.inject('blockDiv', {
	toolbox: toolbox,
	collapse: true,
	toolboxPosition: 'start',
	trashcan: true,
	theme: {'startHats': true}
});

const langGen = new Blockly.Generator('LangGen');

workspace.addChangeListener(Blockly.Events.disableOrphans);

langGen['Action/action5'] = function (block) {
	return '';
}

langGen['Event/event2'] = function (block) {
	return '';
}

langGen['Declare/declare13'] = function (block) {
	return '';
}

langGen['Func/func3'] = function (block) {
	return '';
}

langGen['Declare/declare6'] = function (block) {
	return '';
}

langGen['Declare/declare5'] = function (block) {
	return '';
}

langGen['ExprType1/ref'] = function (block) {
	return '';
}

langGen['Declare/declare3'] = function (block) {
	return '';
}

langGen['Expr/exp2'] = function (block) {
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

langGen['Call/call1'] = function (block) {
	return '';
}

langGen['Declare/declare1'] = function (block) {
	return '';
}

langGen['Expr/exp3'] = function (block) {
	return '';
}

langGen['When/when2'] = function (block) {
	return '';
}

langGen['ExprType1/string'] = function (block) {
	return '';
}

langGen['When/when1'] = function (block) {
	return '';
}

langGen['ExprType2/ref'] = function (block) {
	return '';
}

langGen['Declare/declare15'] = function (block) {
	return '';
}

langGen['Thing_parameters/func'] = function (block) {
	return '';
}

langGen['Action/action7'] = function (block) {
	return '';
}

langGen['Declare/declare12'] = function (block) {
	return '';
}

langGen['Params/params1'] = function (block) {
	return '';
}

langGen['Func/func3'] = function (block) {
	return '';
}

langGen['Func/func2'] = function (block) {
	return '';
}

langGen['Action/action4'] = function (block) {
	return '';
}

langGen['Declare/declare8'] = function (block) {
	return '';
}

langGen['Dot_Id/dot_id'] = function (block) {
	return '';
}

langGen['Ref/ref2'] = function (block) {
	return '';
}

langGen['Action/action2'] = function (block) {
	return '';
}

langGen['Declare/declare9'] = function (block) {
	return '';
}

langGen['Declare/declare2'] = function (block) {
	return '';
}

langGen['Declare/declare4'] = function (block) {
	return '';
}

langGen['Params/params4'] = function (block) {
	return '';
}

langGen['Call/call2'] = function (block) {
	return '';
}

langGen['Declare/declare7'] = function (block) {
	return '';
}

langGen['Thing_parameters/event'] = function (block) {
	return '';
}

langGen['Action/action1'] = function (block) {
	return '';
}

langGen['Action/action8'] = function (block) {
	return '';
}

langGen['Declare/declare16'] = function (block) {
	return '';
}

langGen['Action/action6'] = function (block) {
	return '';
}

langGen['Call_sub_formula/expression'] = function (block) {
	return '';
}

langGen['When_sub_formula/When_sub_formula1'] = function (block) {
	return '';
}

langGen['Declare/declare14'] = function (block) {
	return '';
}

langGen['Integer/natural'] = function (block) {
	return '';
}

langGen['Declare/declare11'] = function (block) {
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

langGen['When_sub_formula/When_sub_formula2'] = function (block) {
	return '';
}

langGen['String/s'] = function (block) {
	return '';
}

langGen['Params/params3'] = function (block) {
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

langGen['ExprType1/integer'] = function (block) {
	return '';
}

langGen['Id'] = function (block) {
	return '';
}

langGen['Declare/declare10'] = function (block) {
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
