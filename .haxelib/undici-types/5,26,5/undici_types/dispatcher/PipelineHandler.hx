package undici_types.dispatcher;

typedef PipelineHandler = (data:PipelineHandlerData) -> node.stream.Readable;