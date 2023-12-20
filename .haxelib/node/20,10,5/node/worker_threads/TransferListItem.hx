package node.worker_threads;

typedef TransferListItem = ts.AnyOf5<MessagePort, node.buffer.Blob, js.lib.ArrayBuffer, node.fs.promises.FileHandle, node.crypto.X509Certificate>;