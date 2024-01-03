import { ProjectItem } from './ProjectItem.js';
import { DOMHelper } from '../utility/DOMHelper.js';

export class ProjectsList {
	projects = [];

	constructor(projectStatus) {
		this.projectStatus = projectStatus;
		const projectItems = document.querySelectorAll(
			`#${projectStatus}-projects li`
		);
		for (const projectItem of projectItems) {
			this.projects.push(
				new ProjectItem(
					projectItem.id,
					this.switchProject.bind(this),
					this.projectStatus
				)
			);
		}
		this.connectDroppable();
	}

	connectDroppable() {
		const list = document.querySelector(`#${this.projectStatus}-projects ul`);

		list.addEventListener('dragenter', event => {
			if (event.dataTransfer.types[0] === 'text/plain') {
				event.preventDefault();
			}
			list.parentElement.classList.add('droppable');
		});

		list.addEventListener('dragover', event => {
			if (event.dataTransfer.types[0] === 'text/plain') {
				event.preventDefault();
			}
		});

		list.addEventListener('dragleave', event => {
			if (
				event.relatedTarget.closest(`#${this.projectStatus}-projects ul`) !==
				list
			) {
				list.parentElement.classList.remove('droppable');
			}
		});

		list.addEventListener('drop', event => {
			const projectID = event.dataTransfer.getData('text/plain');
			if (this.projects.find(p => p.id === projectID)) {
				return;
			}
			document
				.getElementById(projectID)
				.querySelector('button:last-of-type')
				.click();
			list.parentElement.classList.remove('droppable');
		});
	}

	setSwitchProjectHandler(switcHandlerFunction) {
		this.switchHandler = switcHandlerFunction;
	}

	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.projectStatus}-projects ul`);
		project.update(this.switchProject.bind(this), this.projectStatus);
	}

	switchProject(projectId) {
		this.switchHandler(this.projects.find(project => project.id === projectId));
		this.projects = this.projects.filter(project => project.id !== projectId);
	}
}
