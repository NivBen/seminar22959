module kogi::seminar::Plugin

import ParseTree;
import kogi::Compile;
import kogi::simplification::Main;
import kogi::seminar::Syntax;

void createBBE() {
  createBlocklyApp(#Thing, targetPath = |project://kogi/src/kogi/seminar/generated-kogi-files|, blockly = "../../../lib");
}

void createSimplifiedBBE() {
  set[Production] prods = kogification(#Thing); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/seminar/sKogi|, blockly = "../../../lib");
}
