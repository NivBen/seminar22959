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
  = when1: Id id_when Id id_source When_sub_formula* Id id_signal Params "{" Action* "}"
  | when2: Id id_when Id id_source "[" Declare "]" When_sub_formula* Id id_signal Params "{" Action* "}"
  | when3: Id id_source When_sub_formula* Id id_signal Params "{" Action* "}"
  | when4: Id id_source "[" Declare "]" When_sub_formula* Id id_signal Params "{" Action* "}"
  ;

  // { Id [ "[" <declare> "]" ] "."}
  syntax When_sub_formula
  = When_sub_formula1: "." Id id_source 
  | When_sub_formula2: "." Id id_source "[" Declare "]"
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

  // ["[]"] [Id_alias ":"] {id_item}^+"." ["=" string_initial] [string_import]
  syntax Declare
  = declare1: "[]" Id ":" Id id_item Declare_sub_formula* "=" String initial String import
  | declare2: "[]" Id ":" Id id_item Declare_sub_formula* "=" String initial 
  | declare3: "[]" Id ":" Id id_item Declare_sub_formula* String import 
  | declare4: "[]" Id ":" Id id_item Declare_sub_formula*
  | declare5: "[]" Id id_item Declare_sub_formula* "=" String initial String import
  | declare6: "[]" Id id_item Declare_sub_formula* "=" String initial
  | declare7: "[]" Id id_item Declare_sub_formula* String import
  | declare8: "[]" Id id_item Declare_sub_formula*
  | declare9:  Id ":" Id id_item Declare_sub_formula* "=" String initial String import
  | declare10: Id ":" Id id_item Declare_sub_formula* "=" String initial 
  | declare11: Id ":" Id id_item Declare_sub_formula* String import 
  | declare12: Id ":" Id id_item Declare_sub_formula*
  | declare13: Id id_item Declare_sub_formula* "=" String initial String import
  | declare14: Id id_item Declare_sub_formula* "=" String initial
  | declare15: Id id_item Declare_sub_formula* String import
  | declare16: Id id_item Declare_sub_formula*
  ;

  //{id_item}^+"."
  syntax Declare_sub_formula
  = dot_id: "." Id id_item
  ;

  // "(" <declare>*"," ["..."] ")"
  syntax Params
  = params1: "(...)"
  | params2: "()"
  | params3: "(" Params_sub_formula* "...)"
  | params4: "(" Params_sub_formula* ")"
  ;

  //<declare>*","
  syntax Params_sub_formula
  = declare_comma: Declare ","
  ;

  lexical Integer = natural: [0-9]+;
  lexical String =  s: [a-zA-Z]*;


