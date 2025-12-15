import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

import Link from "next/link"
import { buttonVariants } from "../ui/button"

function Navbar() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Distribution</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                       <Link href="/Exploitation">Exploitation</Link> 
                    </MenubarItem>
                    <MenubarItem>
                        Interventions <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Maintenance</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Activités</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Inspections</MenubarItem>
                            <MenubarItem>Mesures</MenubarItem>
                            <MenubarItem>Contrôles</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Commercial</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Relève&Distribution <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Recouvrement <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Technique</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Opérations</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>PNT</MenubarItem>
                            <MenubarItem>Branchements</MenubarItem>
                            <MenubarItem>Normalisation</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Projets</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem>Capex Distribution</MenubarCheckboxItem>
                    <MenubarCheckboxItem>
                        Optimisation Réseaux
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                        TR <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem inset>
                        FEC <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Gros BT et MT</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Logistique</MenubarTrigger>
                <MenubarContent>
                    <MenubarRadioGroup value="">
                        <MenubarRadioItem value="andy">Sécurité</MenubarRadioItem>
                        <MenubarRadioItem value="andy">Stock</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">Véhicules</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Patrimoine</MenubarRadioItem>
                    </MenubarRadioGroup>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar