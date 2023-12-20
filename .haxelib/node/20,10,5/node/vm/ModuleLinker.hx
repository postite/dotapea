package node.vm;

typedef ModuleLinker = (specifier:String, referencingModule:Module, extra:{ var assert : node.module.ImportAttributes; var attributes : node.module.ImportAttributes; }) -> ts.AnyOf2<Module, js.lib.Promise<Module>>;