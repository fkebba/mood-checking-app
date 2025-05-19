interface DropdownElements {
        profileButton: HTMLElement | null;
        dropdownMenu: HTMLElement | null;
      }

      document.addEventListener('DOMContentLoaded', (): void => {
        const elements: DropdownElements = {
          profileButton: document.getElementById('profileButton'),
          dropdownMenu: document.getElementById('dropdownMenu')
        };

    
        elements.profileButton?.addEventListener('click', (event: MouseEvent): void => {
          event.stopPropagation();
          elements.dropdownMenu?.classList.toggle('hidden');
        });

        
        window.addEventListener('click', (): void => {
          if (elements.dropdownMenu?.classList.contains('hidden') === false) {
            elements.dropdownMenu?.classList.add('hidden');
          }
        }); 
      });