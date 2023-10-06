import tkinter as tk
from tkinter import scrolledtext

def check_city():
    city = entry.get().title()
    response = f"Python Game: Ви ввели {city}\n"
    game_log.config(state=tk.NORMAL)
    game_log.insert(tk.END, f"Ви: {city}\n")
    game_log.insert(tk.END, response)
    game_log.yview(tk.END)
    game_log.config(state=tk.DISABLED)
    notification.config(text=response)
    entry.delete(0, tk.END)
    

root = tk.Tk()
root.title('Гра в міста')
root.geometry('800x400')

left_frame = tk.Frame(root)
left_frame.pack(side=tk.LEFT, padx=20, pady=20, fill=tk.BOTH)

label = tk.Label(left_frame, text='Введіть назву міста')
label.pack(padx=10, pady=10)

entry = tk.Entry(left_frame, width=35)
entry.pack(padx=10, pady=10)

button = tk.Button(left_frame, text='Відправити', command=check_city)
button.pack(padx=10, pady=10)

notification = tk.Label(left_frame, text='')
notification.pack(padx=10, pady=10)

game_log = scrolledtext.ScrolledText(root, width=50, height=15, wrap=tk.WORD)
game_log.pack(padx=10, pady=10, side=tk.RIGHT)
game_log.config(state=tk.DISABLED)

root.mainloop()