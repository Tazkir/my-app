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
            <AnimatePresence>
              <m.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Menubar.Content className="menu-content  p-2 max-sm:top-5 sm:top-6 absolute right-[-10px] max-sm:w-[10em] sm:w-[13em] shadow-md rounded-md">
                  <m.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="divide-y divide-slate-500"
                  >
                    <Menubar.Item>
                      <DropdownLink
                        className="dropdown-link hover:bg-violet-500 focus:outline-none"
                        href="/about"
                      >
                        <div className="overflow-hidden">
                          <m.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                          >
                            {' '}
                            About
                          </m.h1>{' '}
                        </div>
                      </DropdownLink>
                    </Menubar.Item>
                    <Menubar.Item>
                      <DropdownLink
                        className="dropdown-link hover:bg-violet-500 focus:outline-none"
                        href="/work"
                      >
                        <div className="overflow-hidden">
                          <m.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                          >
                            {' '}
                            Work
                          </m.h1>{' '}
                        </div>
                      </DropdownLink>
                    </Menubar.Item>
                    <Menubar.Item>
                      <DropdownLink
                        className="dropdown-link hover:bg-violet-500 focus:outline-none"
                        href="/contact"
                      >
                        <div className="overflow-hidden">
                          <m.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                          >
                            {' '}
                            Contact
                          </m.h1>{' '}
                        </div>
                      </DropdownLink>
                    </Menubar.Item>
                    <Menubar.Item>
                      <DropdownLink
                        className="dropdown-link hover:bg-violet-500 focus:outline-none"
                        href="https://read.cv/tazkir"
                        target="_blank"
                      >
                        <div className="overflow-hidden">
                          <m.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                          >
                            {' '}
                            Read.CV
                          </m.h1>{' '}
                        </div>
                      </DropdownLink>
                    </Menubar.Item>
                  </m.div>
                </Menubar.Content>
              </m.div>
            </AnimatePresence>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </>
  );
}

export default Menu;
