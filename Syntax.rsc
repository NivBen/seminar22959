module kogi::seminar::Syntax

extend lang::std::Layout;
extend lang::std::Id;

// import kogi::seminar::Lexical;

  start syntax Thing
  = thing1: Id "{" Thing_parameters* things "}"
  | thing2: Id "{}"
  ;

  syntax Thing_parameters
  = declare: "Declare" Declare*
  | event: "Event" Event*
  | when: "When" When*
  ;

  syntax When
  = when1: Id "[" Declare "]" Id Id Params "{" Action* "}"
  ;

  syntax Action
  = action: "*" Expr "?" "{}"
  ;

  syntax Event
  = event1: Id Id Params
  | event2: Id Params
  ;

  syntax Declare
  = declare1: "[]" Id ":" Id "=" String initial String import // ["[]"] [Id_alias ":"] {id_item} ["=" string_initial] [string_import]
  | declare2: "[]" Id ":" Id "=" String initial // ["[]"] [Id_alias ":"] {id_item} ["=" string_initial]
  | declare3: "[]" Id ":" Id String import // ["[]"] [Id_alias ":"] {id_item} [string_import]
  | declare4: "[]" Id ":" Id // ["[]"] [Id_alias ":"] {id_item}+
  | declare5: "[]" Id ":" Id Dot_Id* "=" String initial String import // ["[]"] [Id_alias ":"] {id_item}+"." ["=" string_initial] [string_import]
  | declare6: "[]" Id ":" Id Dot_Id* "=" String initial // ["[]"] [Id_alias ":"] {id_item}+"." ["=" string_initial]
  | declare7: "[]" Id ":" Id Dot_Id*  String import // ["[]"] [Id_alias ":"] {id_item}+"." [string_import]
  | declare8: "[]" Id ":" Id Dot_Id* // ["[]"] [Id_alias ":"] {id_item}+"."
  ;

  syntax Params
  = params1: "(...)"
  | params2: "()"
  | params3: "(" Declare* decalre "...)"
  | params4: "(" Declare* decalre ")"
  ;

  syntax Dot_Id
  = dot_id: "." Id
  ;

  syntax Expr
  = exp1: ExprType
  ;

  syntax Ref
  = ref1: Id
  | ref2: Id "[" Expr "]"
  | ref3: Id "[*]"
  ;

  syntax ExprType
  = string: String str
  | integer: Integer inte
  | ref: Ref
  ;

  lexical Integer = inte: [0-9]+;
  lexical String =  s: [a-zA-Z]*;

keyword Keywords = "true" | "false" ;

