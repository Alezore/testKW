

var medium = ctx.getParameterValueROAccess().getParameterStrValue("KW_MEDIUM");
if (medium == "EMAIL") {
	var byteArray = ctx.getResourceAccess().getResourceNotNull("MAIL_SUBJECT", false);
	var mailSubject = new java.lang.String(byteArray, "UTF-8");

	ctx.getParameterValueRWAccess().setParameterStrValue("MAIL_SUBJECT", mailSubject);	
}
