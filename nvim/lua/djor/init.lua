require("djor.remap")
require("djor.packer")

vim.wo.number = true
vim.opt.guicursor = ""

vim.opt.tabstop = 2
vim.opt.softtabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.relativenumber = false
vim.opt.smartindent = true
vim.opt.incsearch = true
vim.opt.hlsearch = false
vim.opt.termguicolors = true
vim.opt.wrap = false

vim.opt.scrolloff = 12

vim.cmd(":hi LineNr guibg=none guifg=#56526e")
vim.cmd(":hi NonText guifg=bg")

