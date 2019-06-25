module.exports = `
<table border="1" cellpadding="1" cellspacing="1" style="width: 500px;">
	<thead>
		<tr>
			<th scope="col">Position</th>
			<th scope="col">Runner</th>
			<th scope="col">Time</th>
			<th scope="col">Note</th>
			<th scope="col">Total runs</th>
		</tr>
	</thead>
	<tbody>
    {{#data}}
		<tr>
			<td>{{pos}}</td>
			<td>{{parkrunner}}</td>
			<td>{{time}}</td>
			<td>{{note}}</td>
			<td>{{totalRuns}}</td>
    </tr>
    {{/data}}
	</tbody>
</table>

<h3>Key</h3>

<p>PB = Personal best</p>

<h3>Thanks to the volunteers</h3>

<p>{{volunteers}}</p>

<h2>Take part</h2>

<p>To register for parkrun, or for more information, speak to gym staff who can provide application forms and answer any questions you might have.</p>

<p>Family and friends can track your parkrun progress by visiting the {{title}} page on the parkrun website.</p>
`;
