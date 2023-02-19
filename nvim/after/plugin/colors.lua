require('rose-pine').setup({
  --- @usage 'main' | 'moon'
  dark_variant = 'moon',
  disable_italics = false,
})

function ColorMyPencils(color)
		color = color or "rose-pine"
		vim.cmd.colorscheme(color)
end

ColorMyPencils()
