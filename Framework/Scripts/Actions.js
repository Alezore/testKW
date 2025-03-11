/**
 * 
 */


function finalizeDocument($context, $Metadata) {
	// Set metadata for oms formatting
	$context.setDataValue($Metadata.OutputMode,'OMS');
	$context.print('OMS').then(function(result) {
		// Reset metadata in case of success
		$context.beginBulkUpdate();
		$context.setDataValue($Metadata.OutputMode,'');
		$context.setDataValue($Metadata.State,'Finished');
		$context.setDataValue($Metadata.Assignee,$CurrentUser.guid);
		$context.endBulkUpdate();
		$context.save();
		$context.close();
		// user feedback before closing the window
		window.alert("" + result.numberOfPages + " pages send to m/oms for processing (inputId = " + result.InputId + ")")
	}, function(err) {
		// Reset metadata in case of error
		$context.setDataValue($Metadata.OutputMode,'');
	});	
}