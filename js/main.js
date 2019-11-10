document.getElementById("demo").innerHTML = "Hello JavaScript!";

function combinations() {
	let textArea = document.getElementById("text-area");
	for (i1 = 0; i1 < 4; i1++)
	{
		let str1 = `{ ${i1.toString()}, `;
		for (i2 = 0; i2 < 4; i2++)
		{
			let str2 = str1 + `${i2.toString()}, `;
			for (i3 = 0; i3 < 4; i3++)
			{
				let str3 = str2 + `${i3.toString()}, `;
				for (i4 = 0; i4 < 4; i4++)
				{
					let str4 = str3 + `${i4.toString()}, `;
					for (i5 = 0; i5 < 4; i5++)
					{
						let str5 = str4 + `${i5.toString()}, `;
						for (i6 = 0; i6 < 4; i6++)
						{
							let str6 = str5 + `${i6.toString()}, `;
							for (i7 = 0; i7 < 4; i7++)
							{
								let str7 = str6 + `${i7.toString()}, `;
								for (i8 = 0; i8 < 4; i8++)
								{
									let str8 = str7 + `${i8.toString()}, `;
									textArea.innerHTML = '';
									for (i9 = 0; i9 < 4; i9++)
									{
										let str9 = str8 + `${i9.toString()} },`;
										//console.log(`${str9}`);
										textArea.innerHTML += `${str9}\n`;
									}
									//return;
								}
							}
						}
					}
				}
			}
		}
	}
};
