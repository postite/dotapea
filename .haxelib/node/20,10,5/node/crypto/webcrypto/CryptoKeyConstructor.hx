package node.crypto.webcrypto;

typedef CryptoKeyConstructor = {
	/**
		Illegal constructor
	**/
	@:selfCall
	function call(_:{ final _ : js.lib.Symbol; }):Any;
	final length : Int;
	final name : String;
	final prototype : CryptoKey;
};