module kogi::seminar::Syntax
extend lang::std::Layout;
extend lang::std::Id;

  // Id "{" {(<declare> | <event> | <when> | <func>)}* "}"
  start syntax Thing
  = thing1: Id "{" Thing_parameters* things "}"
  ;

  // (<declare> | <event> | <when> | <func>)
  syntax Thing_parameters
  = declare: Declare
  | event: Event
  | when: When
  | func: Func
  ;

  // [Id] Id <Params>
  syntax Event
  = event1: Id id_event Id Params
  | event2: Id Params
  ;

  // [id] { Id [ "[" <declare> "]" ] "."}^+ Id <Params> "{" <action>* "}"
  syntax When
  = when1: Id id_when When_sub_formula* Id id_signal Params "{" Action* "}"
  | when2: When_sub_formula* Id id_signal Params "{" Action* "}"
  ;

  syntax When_sub_formula
  = When_sub_formula1: Id id_source "." 
  | When_sub_formula2: Id id_source "[" Declare "]."
  ;

  // [id] Id <params> "->" <params> [ "{" <action>* "}" ]
  syntax Func
  = func1: Id id_source Params "-\>" Params
  | func2: Id id_source Params "-\>" Params "{" Action* "}"
  | func3: Id id_function Id id_source Params "-\>" Params
  | func3: Id id_function Id id_source Params "-\>" Params "{" Action* "}"
  ;

  // ["*"] <expr> ["?"] "{" <action>* "}" [ "{" <action>* "}" ]
  syntax Action
  = action1: "*" Expr "?" "{" Action* action_true "}"
  | action2: "*" Expr "?" "{" Action* action_true "}" "{" Action* action_false "}"
  | action3: Expr "?" "{" Action* action_true "}"
  | action4: Expr "?" "{" Action* action_true "}" "{" Action* action_false "}"
  | action5: "*" Expr "{" Action* action_true "}"
  | action6: "*" Expr "{" Action* action_true "}" "{" Action* action_false "}"
  | action7: Expr "{" Action* action_true "}"
  | action8: Expr "{" Action* action_true "}" "{" Action* action_false "}"
  ;

  // (String | Number | <ref>) { "." (<ref> |<call>) }* ["->" ((<declare> |<params>))]
  syntax Expr
  = exp1: ExprType1 ExprType2*
  | exp2: ExprType1 ExprType2* "-\>" Declare
  | exp3: ExprType1 ExprType2* "-\>" Params
  ;

  // (String | Number | <ref>)
  syntax ExprType1
  = string: String str
  | integer: Integer int
  | ref: Ref
  ;

  // (<ref> |<call>)
  syntax ExprType2
  = ref: "." Ref
  | call: "." Call
  ;

  // (Id | func) "(" {(<expr>|"*")","}* ")"
  syntax Call
  = call1: Id "(" Call_sub_formula* ")"
  | call2: Func "(" Call_sub_formula* ")"
  ;

  // {(<expr>|"*")","}*
  syntax Call_sub_formula
  = star: "*" ","
  | expression: Expr ","
  ;

  // Id ["[" (<expr> | "*") "]"]
  syntax Ref
  = ref1: Id
  | ref2: Id "[" Expr "]"
  | ref3: Id "[*]"
  ;

  // ["[]"] [Id_alias ":"] {id_item}*"." ["=" string_initial] [string_import]
  syntax Declare
  = declare1: "[]" Id ":" Dot_Id* "=" String initial String import
  | declare2: "[]" Id ":" Dot_Id* "=" String initial 
  | declare3: "[]" Id ":" Dot_Id* String import 
  | declare4: "[]" Id ":" Dot_Id*
  | declare5: "[]" Dot_Id* "=" String initial String import
  | declare6: "[]" Dot_Id* "=" String initial
  | declare7: "[]" Dot_Id* String import
  | declare8: "[]" Dot_Id*
  | declare9:  Id ":" Dot_Id* "=" String initial String import
  | declare10: Id ":" Dot_Id* "=" String initial 
  | declare11: Id ":" Dot_Id* String import 
  | declare12: Id ":" Dot_Id*
  | declare13: Dot_Id* "=" String initial String import
  | declare14: Dot_Id* "=" String initial
  | declare15: Dot_Id* String import
  | declare16: Dot_Id*
  ;

  // "(" <declare>*"," ["..."] ")"
  syntax Params
  = params1: "(...)"
  | params2: "()"
  | params3: "(" Declare* decalre "...)"
  | params4: "(" Declare* decalre ")"
  ;

  syntax Dot_Id
  = dot_id: "." Id
  ;

  lexical Integer = natural: [0-9]+;
  lexical String =  s: [a-zA-Z]*;

keyword Keywords = "true" | "false" ;

