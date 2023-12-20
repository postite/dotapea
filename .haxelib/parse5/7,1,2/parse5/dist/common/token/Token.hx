package parse5.dist.common.token;

typedef Token = ts.AnyOf5<CharacterToken, DoctypeToken, TagToken, CommentToken, EOFToken>;