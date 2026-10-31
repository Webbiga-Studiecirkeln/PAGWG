function NavItem({ href, children }) {
  return <li><a className="text-cyan-900 text-xl hover:text-cyan-600 hover:underline" href={href}>{children}</a></li>
}

export default NavItem