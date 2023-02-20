import * as Menubar from '@radix-ui/react-menubar';
import { HiOutlineBars2 } from 'react-icons/hi2';
import DropdownLink from './DropdownLink';
import { motion as m, AnimatePresence } from 'framer-motion';

function Menu() {
  return (
    <>
      <Menubar.Root className="relative inline-block">
        <Menubar.Menu>
          <Menubar.Trigger className="text-white max-sm:hidden">
            Menu
          </Menubar.Trigger>
          <Menubar.Trigger>
            <HiOutlineBars2 className="h-6 w-6 cursor-pointer text-white sm:hidden" />
          </Menubar.Trigger>

          <Menubar.Portal>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AnimatePresence>
                <Menubar.Content className="menu-content divide-y-2 divide-zinc-600 hover:divide-zinc-600/50 p-2 max-sm:top-5 sm:top-6 absolute right-[-25px] max-sm:w-[10em] sm:w-[13em] shadow-md rounded-md">
                  <Menubar.Item>
                    <DropdownLink className="dropdown-link" href="/about">
                      About
                    </DropdownLink>
                  </Menubar.Item>
                  <Menubar.Item>
                    <DropdownLink className="dropdown-link" href="/work">
                      Work
                    </DropdownLink>
                  </Menubar.Item>
                </Menubar.Content>
              </AnimatePresence>
            </m.div>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </>
  );
}

export default Menu;
