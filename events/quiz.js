		function start() {
				document.getElementById('quiz').innerHTML = `
			Do you want to work with friends?
			<br>
			<button class="button" onclick='I();'>Yes</button>
			<br>
			<button class="button" onclick='II();'>No</button>
			<br>
			`;
			}
			function I() {
				//alert('yes');
				document.getElementById('quiz').innerHTML = `
			Want to compete at area?
			<br>
			<button class="button" onclick='IA();'>Yes</button>
			<br>
			<button class="button" onclick='IB();'>No</button>
			<br><br>
			<button class="button" onclick='start();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
			}
				function IA() {
					document.getElementById('quiz').innerHTML = `
			Do you want to work with technology or media?
			<br>
			<button class="button" onclick='IA1();'>Yes</button>
			<br>
			<button class="button" onclick='IA2();'>No</button>
			<br><br>
			<button class="button" onclick='I();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
				}
					function IA1() {
						document.getElementById('quiz').innerHTML = `
			Which of these topics interests you the most?
			<br>
			<button class="button" onclick='IA1a();'>Information Technology (IT)</button>
			<br>
			<button class="button" onclick='IA1b();'>Graphic Media & Web Design</button>
			<br><br>
			<button class="button" onclick='IA();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
						function IA1a() {
							document.getElementById('quiz').innerHTML = `
			<u>Information Technology (IT)</u>
			<br>
			<button class="button" onclick="window.open('NetworkDesignTeam.html',target='_blank');">Network Design Team</button>
			<br><br>
			<button class="button" onclick='IA1();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
						function IA1b() {
						document.getElementById('quiz').innerHTML = `
			Which one?
			<br>
			<button class="button" onclick='IA1b1();'>Web Design</button>
			<br>
			<button class="button" onclick='IA1b2();'>Graphic Media</button>
			<br><br>
			<button class="button" onclick='IA1();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
						function IA1b1() {
						document.getElementById('quiz').innerHTML = `
			<u>Web Design</u>
			<br>
			<button class="button" onclick="window.open('WebsiteDesignTeam.html',target='_blank');">Website Design Team</button>
			<br><br>
			<button class="button" onclick='IA1b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
						function IA1b2() {
						document.getElementById('quiz').innerHTML = `
			<u>Graphic Media</u>
			<br>
			<button class="button" onclick="window.open('VideoProductionTeam.html',target='_blank');">Video Production Team</button>
			<br>
			<button class="button" onclick="window.open('ComputerAnimationTeam.html',target='_blank');">Computer Animation Team</button>
			<br>
			<button class="button" onclick="window.open('BroadcastNewsProductionTeam.html',target='_blank');">Broadcast News Production Team</button>
			<br><br>
			<button class="button" onclick='IA1b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
					function IA2() {
						document.getElementById('quiz').innerHTML = `
			Choose a category that interests you.
			<br>
			<button class="button" onclick='IA2a();'>Economics & Finance</button>
			<br>
			<button class="button" onclick='IA2b();'>Business Management & Administration</button>
			<br>
			<button class="button" onclick='IA2c();'>Marketing</button>
			<br>
			<button class="button" onclick='IA2d();'>None of These</button>
			<br><br>
			<button class="button" onclick='IA();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
				`;
					}
						function IA2a() {
							document.getElementById('quiz').innerHTML = `
			<u>Economics & Finance</u>
			<br>
			<button class="button" onclick="window.open('FinancialAnalystTeam.html',target='_blank');">Financial Analyst Team</button>
			<br>
			<button class="button" onclick="window.open('EconomicResearchTeam.html',target='_blank');">Economic Research Team</button>
			<br><br>
			<button class="button" onclick='IA2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
						}
						function IA2b() {
							document.getElementById('quiz').innerHTML = `
			<u>Business Management & Administration</u>
			<br>
			<button class="button" onclick="window.open('AdministrativeSupportTeam.html',target='_blank');">Administrative Support Team</button>
			<br>
			<button class="button" onclick="window.open('SmallBusinessManagementTeam.html',target='_blank');">Small Business Management Team</button>
			<br><br>
			<button class="button" onclick='IA2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
						}
						function IA2c() {
							document.getElementById('quiz').innerHTML = `
			<u>Marketing</u>
			<br>
			<button class="button" onclick="window.open('GlobalMarketingTeam.html',target='_blank');">Global Marketing Team</button>
			<br><br>
			<button class="button" onclick='IA2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
						}
						function IA2d() {
							document.getElementById('quiz').innerHTML = `
			<u>None of These</u>
			<br>
			<button class="button" onclick="window.open('ParliamentaryProcedureTeam.html',target='_blank');">Financial Analyst Team</button>
			<br><br>
			<button class="button" onclick='IA2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
						}
				function IB() {
					document.getElementById('quiz').innerHTML = `
			<u>Team Virtual Events</u>
			<br>
			<button class="button" onclick="window.open('VirtualMultimedia&Promotion-Team.html',target='_blank');">Virtual Multimedia & Promotion - Team</button>
			<br>
			<button class="button" onclick="window.open('SoftwareEngineeringTeam.html',target='_blank');">Software Engineering Team</button>
			<br>
			<button class="button" onclick="window.open('WebApplicationTeam.html',target='_blank');">Web Application Team</button>
			<br>
			<button class="button" onclick="window.open('Start-upEnterpriseTeam-Pilot.html',target='_blank');">Start-up Enterprise Team-Pilot</button>
			<br><br>
			<button class="button" onclick='IA2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
				}

			function II() {
				document.getElementById('quiz').innerHTML = `
			Have you taken, would you like to take, or are you going to take, a business class?
			<br>
			<button class="button" onclick='IIA();'>Yes</button>
			<br>
			<button class="button" onclick='IIB();'>No</button>
			<br><br>
			<button class="button" onclick='start();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
			}
				function IIA() {
					document.getElementById('quiz').innerHTML = `
			Which class?
			<br>
			<button class="button" onclick='IIA1();'>Accounting</button>
			<br>
			<button class="button" onclick='IIA2();'>Marketing</button>
			<br>
			<button class="button" onclick='IIA3();'>Economics</button>
			<br><br>
			<button class="button" onclick='II();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
				}
					function IIA1() {
						document.getElementById('quiz').innerHTML = `
			<u>Accounting</u>
			<br>
			<button class="button" onclick="window.open('FundamentalAccounting.html',target='_blank');">Fundamental Accounting</button>
			<br>
			<button class="button" onclick="window.open('AdvancedAccounting.html',target='_blank');">Advanced Accounting</button>
			<br>
			<button class="button" onclick="window.open('PayrollAccounting.html',target='_blank');">Payroll Accounting</button>
			<br><br>
			<button class="button" onclick='IIA();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
					}
					function IIA2() {
						document.getElementById('quiz').innerHTML = `
			<u>Marketing</u>
			<br>
			<button class="button" onclick="window.open('GraphicDesignPromotion.html',target='_blank');">Graphic Design Promotion</button>
			<br><br>
			<button class="button" onclick='IIA();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
					}
					function IIA3() {
						document.getElementById('quiz').innerHTML = `
			<u>Economics</u>
			<br>
			<button class="button" onclick="window.open('EconomicResearchIndividual.html',target='_blank');">Economic Research Individual</button>
			<br><br>
			<button class="button" onclick='IIA();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
					}
				function IIB() {
					document.getElementById('quiz').innerHTML = `
			Do you like working with technology or media?
			<br>
			<button class="button" onclick='IIB1();'>Yes</button>
			<br>
			<button class="button" onclick='IIB2();'>No</button>
			<br><br>
			<button class="button" onclick='II();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
				}
					function IIB1() {
						document.getElementById('quiz').innerHTML = `
			Which of these topics interests you the most?
			<br>
			<button class="button" onclick='IIB1a();'>IT & Computer Science</button>
			<br>
			<button class="button" onclick='IIB1b();'>Graphic Media & Web Design</button>
			<br><br>
			<button class="button" onclick='IIB();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
					}
						function IIB1a() {
							document.getElementById('quiz').innerHTML = `
			What interests you the most?
			<br>
			<button class="button" onclick='IIB1a();'>Computer Programming</button>
			<br>
			<button class="button" onclick='IIB1b();'>Computer Networking</button>
			<br>
			<button class="button" onclick='IIB1b();'>Databases</button>
			<br>
			<button class="button" onclick='IIB1b();'>PC Servicing</button>
			<br><br>
			<button class="button" onclick='IIB1();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
						}
							function IIB1a1() {
								document.getElementById('quiz').innerHTML = `
			<u>Computer Programming</u>
			<br>
			<button class="button" onclick="window.open('VisualBasic&C#Programming.html',target='_blank');">Visual Basic/C# Programming</button>
			<br>
			<button class="button" onclick="window.open('C++Programming.html',target='_blank');">C++ Programming</button>
			<br>
			<button class="button" onclick="window.open('JavaProgramming.html',target='_blank');">Java Programming</button>
			<br><br>
			<button class="button" onclick='IIB1a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB1a2() {
								document.getElementById('quiz').innerHTML = `
			<u>Computer Networking</u>
			<br>
			<button class="button" onclick="window.open('ComputerNetworkTechnology.html',target='_blank');">Computer Network Technology</button>
			<br>
			<button class="button" onclick="window.open('NetworkAdministrationUsingMicrosoft.html',target='_blank');">Network Administration Using Microsoft</button>
			<br>
			<button class="button" onclick="window.open('SystemsAdministrationUsingCisco.html',target='_blank');">Systems Administration Using Cisco</button>
			<br><br>
			<button class="button" onclick='IIB1a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB1a3() {
								document.getElementById('quiz').innerHTML = `
			<u>Databases</u>
			<br>
			<button class="button" onclick="window.open('DatabaseApplications.html',target='_blank');">Database Applications</button>
			<br>
			<button class="button" onclick="window.open('SQLDatabaseFundamentals.html',target='_blank');">SQL Database Fundamentals</button>
			<br><br>
			<button class="button" onclick='IIB1a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB1a4() {
								document.getElementById('quiz').innerHTML = `
			<u>PC Servicing</u>
			<br>
			<button class="button" onclick="window.open('PCServicing&Troubleshooting.html',target='_blank');">PC Servicing & Troubleshooting</button>
			<br><br>
			<button class="button" onclick='IIB1a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
						function IIB1b() {
							document.getElementById('quiz').innerHTML = `
			Which one?
			<br>
			<button class="button" onclick='IIB1b1();'>Web Design</button>
			<br>
			<button class="button" onclick='IIB1b2();'>Graphic Media</button>
			<br>
			<button class="button" onclick='IIB1b3();'>Office Software</button>
			<br><br>
			<button class="button" onclick='IIB1();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
						}
							function IIB1b1() {
								document.getElementById('quiz').innerHTML = `
			<u>Web Design</u>
			<br>
			<button class="button" onclick="window.open('FundamentalsofWebDesign.html',target='_blank');">Fundamentals of Web Design</button>
			<br><br>
			<button class="button" onclick='IIB1b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB1b2() {
								document.getElementById('quiz').innerHTML = `
			<u>Graphic Media</u>
			<br>
			<button class="button" onclick="window.open('GraphicDesignPromotion.html',target='_blank');">Graphic Design Promotion</button>
			<br>
			<button class="button" onclick="window.open('DigitalPublishing.html',target='_blank');">Digital Publishing</button>
			<br>
			<button class="button" onclick="window.open('DigitalMediaProduction.html',target='_blank');">Digital Media Production</button>
			<br>
			<button class="button" onclick="window.open('PresentationManagementIndividual.html',target='_blank');">Presentation Management Individual</button>
			<br><br>
			<button class="button" onclick='IIB1b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB1b3() {
								document.getElementById('quiz').innerHTML = `
			What type of software?
			<br>
			<button class="button" onclick='IIB1b3a();'>Word Processing</button>
			<br>
			<button class="button" onclick='IIB1b3b();'>Spreadsheets</button>
			<br>
			<button class="button" onclick='IIB1b3c();'>3D Modeling</button>
			<br>
			<button class="button" onclick='IIB1b3d();'>None of these</button>
			<br><br>
			<button class="button" onclick='IIB1b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
								function IIB1b3a() {
									document.getElementById('quiz').innerHTML = `
			<u>Word Processing</u>
			<br>
			<button class="button" onclick="window.open('FundamentalWordProcessing.html',target='_blank');">Fundamental Word Processing</button>
			<br>
			<button class="button" onclick="window.open('IntermediateWordProcessing.html',target='_blank');">Intermediate Word Processing</button>
			<br>
			<button class="button" onclick="window.open('AdvancedWordProcessing.html',target='_blank');">Advanced Word Processing</button>
			<br><br>
			<button class="button" onclick='IIB1b3();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
								function IIB1b3b() {
									document.getElementById('quiz').innerHTML = `
			<u>Spreadsheets</u>
			<br>
			<button class="button" onclick="window.open('FundamentalSpreadsheetApplications.html',target='_blank');">Fundamental Spreadsheet Applications</button>
			<br>
			<button class="button" onclick="window.open('AdvancedSpreadsheetApplications.html',target='_blank');">Advanced Spreadsheet Applications</button>
			<br><br>
			<button class="button" onclick='IIB1b3();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
								function IIB1b3c() {
									document.getElementById('quiz').innerHTML = `
			<u>3D Modeling</u>
			<br>
			<button class="button" onclick="window.open('ComputerModeling.html',target='_blank');">Computer Modeling</button>
			<br><br>
			<button class="button" onclick='IIB1b3();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
								function IIB1b3d() {
									document.getElementById('quiz').innerHTML = `
			<u>Other Software</u>
			<br>
			<button class="button" onclick="window.open('IntegratedOfficeApplications.html',target='_blank');">Integrated Office Applications</button>
			<br><br>
			<button class="button" onclick='IIB1b3();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
					function IIB2() {
						document.getElementById('quiz').innerHTML = `
			Are you more interested in business or in another field?
			<br>
			<button class="button" onclick='IIB2a();'>Business</button>
			<br>
			<button class="button" onclick='IIB2b();'>Another Field</button>
			<br><br>
			<button class="button" onclick='IIB2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
					}
						function IIB2a() {
							document.getElementById('quiz').innerHTML = `
			Are you interested in management or administration?
			<br>
			<button class="button" onclick='IIB2a1();'>Yes</button>
			<br>
			<button class="button" onclick='IIB2a2();'>No</button>
			<br><br>
			<button class="button" onclick='IIB2a2B2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
						}
							function IIB2a1() {
								document.getElementById('quiz').innerHTML = `
			<u>Management and Administration</u>
			<br>
			<button class="button" onclick="window.open('AdministrativeSupportResearchProject.html',target='_blank');">Administrative Support Research Project</button>
			<br>
			<button class="button" onclick="window.open('HumanResourceManagement.html',target='_blank');">Human Resource Management</button>
			<br><br>
			<button class="button" onclick='IIB2a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
							function IIB2a2() {
								document.getElementById('quiz').innerHTML = `
			Choose a category that interests you.
			<br>
			<button class="button" onclick='IIB2a2a();'>Finance</button>
			<br>
			<button class="button" onclick='IIB2a2b();'>Office Procedures</button>
			<br>
			<button class="button" onclick='IIB2a2c();'>Entrepreneurship</button>
			<br><br>
			<button class="button" onclick='IIB2a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
							}
								function IIB2a2a() {
									document.getElementById('quiz').innerHTML = `
			<u>Finance</u>
			<br>
			<button class="button" onclick="window.open('PersonalFinancialManagement.html',target='_blank');">Personal Financial Management</button>
			<br><br>
			<button class="button" onclick='IIB2a2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
								function IIB2a2b() {
									document.getElementById('quiz').innerHTML = `
			<u>Office Procedures</u>
			<br>
			<button class="button" onclick="window.open('BasicOfficeSystems&Procedures.html',target='_blank');">Basic Office Systems & Procedures</button>
			<br>
			<button class="button" onclick="window.open('AdvancedOfficeSystems&Procedures.html',target='_blank');">Advanced Office Systems & Procedures</button>
			<br><br>
			<button class="button" onclick='IIB2a2a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
								function IIB2a2c() {
									document.getElementById('quiz').innerHTML = `
			<u>Entrepreneurship</u>
			<br>
			<button class="button" onclick="window.open('Entrepreneurship.html',target='_blank');">Entrepreneurship</button>
			<br><br>
			<button class="button" onclick='IIB2a2a();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
								}
						function IIB2b() {
							document.getElementById('quiz').innerHTML = `
			Choose another field.
			<br>
			<button class="button" onclick='IIB2b1();'>Medicine</button>
			<br>
			<button class="button" onclick='IIB2b2();'>Law</button>
			<br>
			<button class="button" onclick='IIB2b3();'>Neither</button>
			<br><br>
			<button class="button" onclick='IIB2();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
			`;
						}
							function IIB2b1() {
								document.getElementById('quiz').innerHTML = `
			<u>Medicine</u>
			<br>
			<button class="button" onclick="window.open('MedicalOfficeProcedures.html',target='_blank');">Medical Office Procedures</button>
			<br><br>
			<button class="button" onclick='IIB2b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
							}
							function IIB2b2() {
								document.getElementById('quiz').innerHTML = `
			<u>Law</u>
			<br>
			<button class="button" onclick="window.open('LegalOfficeProcedures.html',target='_blank');">Legal Office Procedures</button>
			<br>
			<button class="button" onclick="window.open('BusinessLaw&Ethics-Pilot.html',target='_blank');">Business Law & Ethics-Pilot</button>
			<br><br>
			<button class="button" onclick='IIB2b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
							}
							function IIB2b3() {
								document.getElementById('quiz').innerHTML = `
			<u>Neither</u>
			<br>
			<button class="button" onclick="window.open('InterviewSkills.html',target='_blank');">Interview Skills</button>
			<br>
			<button class="button" onclick="window.open('AdvancedInterviewSkills.html',target='_blank');">Advanced Interview Skills</button>
			<br>
			<button class="button" onclick="window.open('ExtemporaneousSpeech.html',target='_blank');">Extemporaneous Speech</button>
			<br>
			<button class="button" onclick="window.open('PreparedSpeech.html',target='_blank');">Prepared Speech</button>
			<br><br>
			<button class="button" onclick='IIB2b();'>Back</button>
			<br>
			<button class="button" onclick='start();'>Restart</button>
			<br>
							`;
							}