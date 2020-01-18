Param(
  [string] $Location,
  [string] $Name
)

$deploymentScriptOutputs['test'] = 'value'
Get-AzResourceGroup -Location $Location -Name $Name