import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

const FooterAccordions = () => {
    return ( 
        <Accordion sx={{background: '#fff', width: '100%'}} allowMultiple="allowMultiple">
				<AccordionItem sx={{background: '#fff', borderTop: '0px solid transparent'}}>
				<AccordionButton sx={{ width: 'fit-content', margin: '0 auto'}}>
					<Box as="span" flex='1'  sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<p className="text-[14px] font-[500]">О нас</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel sx={{width: 'fit-content', margin: '0 auto'}}>
                            <p className="text-[12px] cursor-pointer text-center mb-[15px]">Пункты выдачи</p>
                            <p className="text-[12px] cursor-pointer text-center">Вакансии</p>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem sx={{background: '#fff'}}>
				<AccordionButton sx={{ width: 'fit-content', margin: '0 auto'}}>
					<Box as="span" flex='1' textAlign='left' sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<p className="text-[14px] font-[500]">Партнёрам</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
                <AccordionPanel sx={{width: 'fit-content', margin: '0 auto'}}>
                            <p className="text-[12px] cursor-pointer text-center mb-[15px]"> Связаться с нами</p>
                            <p className="text-[12px] cursor-pointer text-center">Вопрос - Ответ</p>
				</AccordionPanel>
				</AccordionItem>
                <AccordionItem sx={{background: '#fff', borderBottom: '0px solid transparent'}}>
				<AccordionButton sx={{ width: 'fit-content', margin: '0 auto'}}>
					<Box as="span" flex='1' textAlign='left' sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<p className="text-[14px] font-[500]">Для предпринимателей</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
                <AccordionPanel sx={{width: 'fit-content', margin: '0 auto'}}>
                            <p className="text-[12px] cursor-pointer text-center mb-[15px]"> Связаться с нами</p>
                            <p className="text-[12px] cursor-pointer text-center">Вопрос - Ответ</p>
				</AccordionPanel>
				</AccordionItem>
			</Accordion>
     );
}
 
export default FooterAccordions;