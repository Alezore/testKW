

var medium = ctx.getParameterValueROAccess().getParameterStrValue("KW_MEDIUM");

if (eventTypeStr.equals("EVENT_TYPE_DOCUMENT")) {
	if (medium == "EMAIL") {
		ctx.deactivateExtension("Render MAIL Attachments", null);
	}
	else if (medium == "EMAILATTACHMENT") {
		ctx.deactivateExtension("Mail Subject", null);
		ctx.deactivateExtension("Render MAIL Body Html", null);
		ctx.deactivateExtension("Render MAIL Body Text", null);
	}
}
else if (eventTypeStr.equals("EVENT_TYPE_GROUP_START")) {
	if (medium != "EMAIL") {
		throw "StackExtensionDocumentException: first document must be KW_MEDIUM = EMAIL. Is there something missing?";
	}
}
