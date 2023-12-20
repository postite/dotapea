package node.diagnostics_channel;

/**
	The class `Channel` represents an individual named channel within the data
	pipeline. It is used to track subscribers and to publish messages when there
	are subscribers present. It exists as a separate object to avoid channel
	lookups at publish time, enabling very fast publish speeds and allowing
	for heavy use while incurring very minimal cost. Channels are created with {@link channel}, constructing a channel directly
	with `new Channel(name)` is not supported.
**/
@:jsRequire("diagnostics_channel", "Channel") extern class Channel {
	private function new(name:ts.AnyOf2<String, js.lib.Symbol>);
	final name : ts.AnyOf2<String, js.lib.Symbol>;
	/**
		Check if there are active subscribers to this channel. This is helpful if
		the message you want to send might be expensive to prepare.
		
		This API is optional but helpful when trying to publish messages from very
		performance-sensitive code.
		
		```js
		import diagnostics_channel from 'node:diagnostics_channel';
		
		const channel = diagnostics_channel.channel('my-channel');
		
		if (channel.hasSubscribers) {
		   // There are subscribers, prepare and publish message
		}
		```
	**/
	final hasSubscribers : Bool;
	/**
		Publish a message to any subscribers to the channel. This will trigger
		message handlers synchronously so they will execute within the same context.
		
		```js
		import diagnostics_channel from 'node:diagnostics_channel';
		
		const channel = diagnostics_channel.channel('my-channel');
		
		channel.publish({
		   some: 'message',
		});
		```
	**/
	function publish(message:Any):Void;
	/**
		Register a message handler to subscribe to this channel. This message handler
		will be run synchronously whenever a message is published to the channel. Any
		errors thrown in the message handler will trigger an `'uncaughtException'`.
		
		```js
		import diagnostics_channel from 'node:diagnostics_channel';
		
		const channel = diagnostics_channel.channel('my-channel');
		
		channel.subscribe((message, name) => {
		   // Received data
		});
		```
	**/
	function subscribe(onMessage:ChannelListener):Void;
	/**
		Remove a message handler previously registered to this channel with `channel.subscribe(onMessage)`.
		
		```js
		import diagnostics_channel from 'node:diagnostics_channel';
		
		const channel = diagnostics_channel.channel('my-channel');
		
		function onMessage(message, name) {
		   // Received data
		}
		
		channel.subscribe(onMessage);
		
		channel.unsubscribe(onMessage);
		```
	**/
	function unsubscribe(onMessage:ChannelListener):Void;
	static var prototype : Channel;
}