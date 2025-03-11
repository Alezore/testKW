<#assign subject = "" />
<#list Document.Section as s>
	<#if s["Container#subject"]?has_content>
		<#-- Workaround TEXT-48762 -->
		<#assign m = s["Container#subject"].Par.@@markup />
		<#assign subject = s["Container#subject"].Par.@@text />
	</#if>
</#list>
<#-- Print subject -->
${subject}